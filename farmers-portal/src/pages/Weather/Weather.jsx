import { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/weather-details', {
                city
            });
            setWeatherData(response.data.weatherData);
            setError('');
        } catch (error) {
            setError('Error fetching weather data');
            console.error('Error fetching data:', error);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-black p-6">Weather reports vary a lot in how much information they contain. The simplest and shortest weather report contains only one piece of information: the present temperature. This is the type of report you often hear on the radio. More detailed weather reports also contain information about precipitation, wind speed and direction, relative humidity, atmospheric pressure, and other things as well.</p>
            <div className="w-96 p-4">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="city">Enter Your City</label>
                    <input 
                        type="text" 
                        value={city} 
                        onChange={(e) => setCity(e.target.value)} 
                        id="city" 
                        className="custom-input" 
                        placeholder="City name" 
                    />
                    <div className="btn-submit flex items-center justify-center">
                        <button type="submit">Get Weather details</button>
                    </div>
                </form>
                {error && <p className="text-red-600">{error}</p>}
            </div>
            {weatherData && (
                <div className='text-black bg-white p-4 rounded-md mt-5'>
                    <h2>Weather in {weatherData.location} </h2>
                    <p>Temperature: {weatherData.temperature} °C</p>
                    <p>Minimum Temperature : {weatherData.tempmin} </p>
                    <p>Maximum Temperature : {weatherData.tempmax} </p>
                    <p>Humidity: {weatherData.humidity} </p>
                </div>
            )}
        </div>
    );
};
export default Weather;
