import { useState, useEffect } from "react";
import axios from "axios"
import { imagesSlider } from "../../data";
const CropManagement = () => {
  const [nitrogen, setNitrogen] = useState('');
  const [potassium, setPotassium] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ph, setPh] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [description, setDescription] = useState(null);
  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = Math.floor(Math.random() * imagesSlider.length);
      setRandomIndex(newIndex);
    }, 3000); // 30 seconds interval

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/crop-predict', {
        nitrogen,
        potassium,
        phosphorus,
        temperature,
        humidity,
        ph,
        rainfall
      });
      console.log(response.data);
      setPrediction(response.data.prediction);
      setDescription(response.data.description)
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  const handleReset = () => {
    setTemperature('');
    setHumidity('');
    setNitrogen('');
    setPotassium('');
    setPhosphorus('');
    setPrediction('');
    setPh('');
    setRainfall('');
    setDescription('');
  };
  return (
    <div className=' w-full flex flex-col lg:flex-row'>
      <div className=' items-center lg:w-2/3 m-5 mt-0 '>
        {prediction ? (
          <div>
            <div className="text-black text-3xl p-4"><span className="font-bold ">Prediction:</span> {prediction} </div>
            <div className="text-black text-2xl p-4"><span className="font-bold ">Description:</span> {description} </div>
            <button className='w-full btn btn-submit bg-black text-white' onClick={handleReset}>Reset</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} >
            <div className=" w-full lg:grid grid-cols-2 gap-4">
              <div>
                <label>Value of Nitrogen: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={nitrogen}
                  onChange={(e) => setNitrogen(e.target.value)}
                />
              </div>
              <div>
                <label>Value of Potassium: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={potassium}
                  onChange={(e) => setPotassium(e.target.value)}
                />
              </div>
              <div>
                <label>Value of Phosphorus: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={phosphorus}
                  onChange={(e) => setPhosphorus(e.target.value)}
                />
              </div>
              <div>
                <label>Temperature: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                />
              </div>
              <div>
                <label>Humidity: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={humidity}
                  onChange={(e) => setHumidity(e.target.value)}
                />
              </div>
              <div>
                <label>Ph value: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={ph}
                  onChange={(e) => setPh(e.target.value)}
                />
              </div>
              <div>
                <label>Rainfall: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={rainfall}
                  onChange={(e) => setRainfall(e.target.value)}
                />
              </div>
              <div className='w-1/3'>
                {prediction && <div>Prediction: {prediction}</div>}
              </div>
            </div>
            <div className="items-center">
            <button className='w-full btn-submit ' type="submit">Predict Crop</button>
            </div>
            
          </form>
        )}
      </div>
      <div className='w-full p-4 mt-2 lg:w-1/3'>
        <div className='carousel rounded-box h-80'>
          <div className='carousel-item w-full h-full object-fit' key={randomIndex}>
            <img className="w-100 h-100" src={imagesSlider[randomIndex].imgUrl} alt={imagesSlider[randomIndex].title} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CropManagement