import { useState, useEffect } from 'react';
import "../Agriculture/custom.css"
import axios from "axios"
import { imagesSlider } from '../../data';

const Fertilizer = () => {
  const [cropType, setCropType] = useState('');
  const [soilType, setSoilType] = useState('');
  const [temperature, setTemperature] = useState('');
  const [moisture, setMoisture] = useState('');
  const [humidity, setHumidity] = useState('');
  const [nitrogen, setNitrogen] = useState('');
  const [potassium, setPotassium] = useState('');
  const [phosphorus, setPhosphorus] = useState('');
  const [prediction, setPrediction] = useState(null);
  // const [description, setDescription] = useState(null);
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
      const response = await axios.post('http://localhost:5000/api/fertilizer', {
        temperature,
        humidity,
        moisture,
        soilType,
        cropType,
        nitrogen,
        potassium,
        phosphorus
      });
      console.log(response.data);
      setPrediction(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
  const handleReset = () => {
    setCropType('');
    setSoilType('');
    setTemperature('');
    setMoisture('');
    setHumidity('');
    setNitrogen('');
    setPotassium('');
    setPhosphorus('');
    setPrediction('');
  };


  return (
    <div className='flex flex-col w-full lg:flex-row '>
      <div className='items-center lg:w-2/3 m-5 mt-2'>
        {prediction ? (
          <div>
            <div className='text-3xl p-4'>Prediction: {prediction.Prediction}</div>
            <div className='text-2xl p-4'>Description : {prediction.Description}</div>
            <button className='btn-submit' onClick={handleReset}>Reset</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="w-full lg:grid grid-cols-2 gap-4">
              <div className=''>
                <label>Crop Type: </label>
                <input
                  type="text"
                  className='custom-input'
                  value={cropType}
                  onChange={(e) => setCropType(e.target.value)}
                />
              </div>
              <div className=''>
                <label>Soil Type: </label>
                <input
                  type="text"
                  className='custom-input'
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
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
                <label>Moisture: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={moisture}
                  onChange={(e) => setMoisture(e.target.value)}
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
                <label>Nitrogen: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={nitrogen}
                  onChange={(e) => setNitrogen(e.target.value)}
                />
              </div>
              <div>
                <label>Potassium: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={potassium}
                  onChange={(e) => setPotassium(e.target.value)}
                />
              </div>
              <div>
                <label>Phosphorus: </label>
                <input
                  type="number"
                  className='custom-input'
                  value={phosphorus}
                  onChange={(e) => setPhosphorus(e.target.value)}
                />
              </div>
            </div>
            <button className='w-full btn-submit' type="submit">Recommend Fertilizer</button>
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
  );
};

export default Fertilizer;
