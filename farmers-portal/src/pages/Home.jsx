import India from "../images/india.png"
const Home = () => {
  return (
    <div>
      <div className=" pb-5 border-2 border-olive-green rounded-box bg-f1f0ab">
        <div className="font-bold flex justify-center items-center text-white bg-emerald-800 h-10 rounded-box">Click on the State and Navigate to your Block and Crop</div>
        <div className="mt-10 flex items-center justify-center">
          <img className="object-center" src={India} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Home;
