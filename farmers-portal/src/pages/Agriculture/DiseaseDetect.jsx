import  { useState,useEffect } from 'react';
import axios from 'axios';

const DiseaseDetect = () => {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    console.log(file); // Log the updated value of file
  }, [file]);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/disease-predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setPrediction(response.data);
      console.log(setPrediction);
      // setFile(null);
      setError('');
    } catch (error) {
      setError('Error predicting disease');
      console.error('Error predicting disease:', error);
    }
  };

  return (
    <div className="mt-10 min-h-screen flex flex-col  items-center">
      <h2 className="text-3xl text-black font-bold mb-8">Find out which disease has been caught by your plant</h2>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full">
        <form className="space-y-4" encType="multipart/form-data" onSubmit={handleSubmit}>
          <h2 className="text-lg font-bold mb-3">Please Upload The Image</h2>
          <input
            type="file"
            name="file"
            className="form-control-file"
            id="inputfile"
            onChange={handleFileChange}
            style={{ fontWeight: 'bold' }}
          />
          {file && <img src={URL.createObjectURL(file)} alt="Uploaded" className="rounded mx-auto d-block" style={{ maxWidth: '100%' }} />}
          <button className="btn btn-primary block w-full mt-4" type="submit" style={{ fontWeight: 'bold' }}>
            Predict
          </button>
        </form>
        {error && <p className="text-red-600">{error}</p>}
        {prediction && <p className="font-bold mt-4">Prediction: {prediction}</p>}
      </div>
    </div>
  );
};

export default DiseaseDetect;
