import cropImage from '../../images/crop.png';

const IrrigatedView = () => {
  return (
    <>
    <div className='ml-8'>
        <h1 className='text-black'>The Gross cropped area of Odisha in 2023</h1>
        <img className="border-none" src={cropImage} alt="" />
    </div>
    </>
  )
}

export default IrrigatedView