from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import pickle
import json
from PIL import Image
import os
from tensorflow.keras.models import load_model
from werkzeug.utils import secure_filename
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
from dict import  crop_dic
from dict  import fertilizer_dic
from dict import disease_dic

app = Flask(__name__)
CORS(app)

# Loading Disease Predict model
model = load_model("../server/models/model.h5")
print('Model loaded')

labels = {0: 'Healthy', 1: 'Powdery', 2: 'Rust'}

def disease_result(image_path):
    img = load_img(image_path, target_size=(225, 225))
    x = img_to_array(img)
    x = x.astype('float32') / 255.
    x = np.expand_dims(x, axis=0)
    prediction = model.predict(x)[0]
    return prediction

@app.route('/api/disease-predict', methods=['POST'])
def upload():
    if request.method == 'POST':
        f = request.files['file']

        # Print the filename to check if the file is received correctly
        print("Received file:", f.filename)

        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename))
        
        # Print the file path to check where the file is being saved
        print("Saving file to:", file_path)

        # Save the file
        f.save(file_path)

        # Print a message to indicate that the file has been saved
        print("File saved successfully")

        # Perform predictions
        predictions = disease_result(file_path)
        predicted_label = labels[np.argmax(predictions)]
        disease_description = disease_dic.get(predicted_label,'No description Found')
        
        # Print the predicted label to check if predictions are working
        print("Predicted label:", predicted_label)
        print(disease_description)

        # Return the predicted label
        return str(predicted_label),str(disease_description)
    return None

crop_recommendation_model_path = '../server/models/crop reccomendation/RandomForest.pkl'
crop_recommendation_model = pickle.load(open(crop_recommendation_model_path, 'rb'))

# Loading fertilizer recommendation model
fertilizer_recommendation_model_path ='../server/models/fertilizer reccomendation/rf_pipeline.pkl'
fertilizer_recommendation_model = pickle.load(open(fertilizer_recommendation_model_path, 'rb'))

#Get Weather report 
@app.route('/api/weather-details', methods=['POST'])
def weather_details():
    if request.method == 'POST':
        data = request.json
        city_name = data.get('city')
        print(city_name) # Use .get() to safely access dictionary keys
        api_url = f'http://api.openweathermap.org/data/2.5/weather?q={city_name}&units=metric&appid=29d0171055e4f69a13ac49e327c384c8'

        try:
            response = requests.get(api_url)
            weather_data = response.json()
            # Extract relevant weather information from the API response
            temperature = weather_data.get('main', {}).get('temp')
            temp_min = weather_data.get('main', {}).get('temp_min')
            temp_max = weather_data.get('main', {}).get('temp_max')
            humidity = weather_data.get('main', {}).get('humidity')
            location_name = weather_data.get('name')
            # main = weather_data.get('main')
            description = weather_data.get('description')
            if temperature is None or location_name is None:
                return jsonify({'error': 'Weather data not found'}), 404
            # Prepare the response data to send back to the frontend
            response_data = {
                'temperature': temperature,
                'location': location_name,
                'humidity': humidity,
                'description':description,
                'tempmin':temp_min,
                'tempmax':temp_max
                # Add more weather data fields as needed
            }
            return jsonify({'weatherData': response_data}), 200
        except Exception as e:
            print(f'Error fetching weather data: {e}')
            return jsonify({'error': 'Failed to fetch weather data'}), 500

# API endpoint to get user data
# Endpoint for crop prediction
@app.route('/api/crop-predict', methods=['POST'])
def crop_prediction():
    if request.method == 'POST':
        data = request.json  # Get JSON data from the POST request
        N = int(data['nitrogen'])
        P = int(data['phosphorus'])
        K = int(data['potassium'])
        ph = float(data['ph'])
        rainfall = float(data['rainfall'])
        temperature = float(data['temperature'])
        humidity = float(data['humidity'])

        input_data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
        my_prediction = crop_recommendation_model.predict(input_data)
        final_prediction = my_prediction[0]
        prediction_description = crop_dic.get(final_prediction.lower(), 'No description available for this crop.')

        # Return prediction as JSON response
        return jsonify({
            "prediction": final_prediction,
            "description":prediction_description
        })
#Soil Conversion
soil_conversion = {
    'Black':0,
    'Clayey':1,
    'Loamy':2,
    'Red':3,
    'Sandy':4,
    'black':0,
    'clayey':1,
    'loamy':2,
    'red':3,
    'sandy':4
}
#CropType Conversion
crop_conversion = {
    'Barley':0,
    'barley':0,
    'Cotton':1,
    'cotton':1,
    'Ground Nuts':2,
    'ground nuts':2,
    'ground Nuts':2,
    'Ground nuts':2,
    'Maize':3,
    'maize':3,
    'Millets':4,
    'millets':4,
    'Oil seeds':5,
    'oil seeds':5,
    'Paddy':6,
    'paddy':6,
    'Pulses':7,
    'pulses':7,
    'Sugarcane':8,
    'sugarcane':8,
    'Tobacco':9,
    'tobacco':9,
    'Wheat':10,
    'wheat':10
}
#conversion Fertilizer Name
fertilizer_conversion ={
    0:'10-26-26',
    1:'14-35-14',
    2:'17-17-17',
    3:'20-20',
    4:'28-28',
    5:'DAP',
    6:'Urea'
}

#Endpoint for fertilizer recomendation
from flask import jsonify

@app.route('/api/fertilizer', methods=['POST'])
def fertilizer_prediction():
    if request.method == 'POST':
        data = request.json
        N = int(data['nitrogen'])
        P = int(data['phosphorus'])
        K = int(data['potassium'])
        Temperature = float(data['temperature'])
        Humidity = float(data['humidity'])
        Moisture = float(data['moisture'])
        Soil = data['soilType']
        crop = data['cropType']
        
        Soil_value = soil_conversion.get(Soil, -1)
        if Soil_value == -1:
            return jsonify({'Error': 'Invalid Soil type'}), 400
        
        Crop_value = crop_conversion.get(crop, -1)
        if Crop_value == -1:
            return jsonify({'Error': 'Invalid crop type'}), 400
        
        input_data = np.array([[Temperature, Humidity, Moisture, Soil_value, Crop_value, N, K, P]])
        my_prediction = fertilizer_recommendation_model.predict(input_data)
        final_prediction = my_prediction[0]
        fertilizer_name = fertilizer_conversion.get(final_prediction)
        fertilizer_description = fertilizer_dic.get(fertilizer_name,'No description Found')
        
        # Return the prediction as JSON response using jsonify
        return jsonify({
            "Prediction": fertilizer_name,
            "Description":fertilizer_description
            })


if __name__ == '__main__':
    app.run(debug=False)
