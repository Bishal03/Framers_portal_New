import home1 from '../images/home1.jpg'
import home2 from '../images/home2.jpg'
import home3 from '../images/home3.jpg'
import home4 from '../images/home4.jpg'

const Hero = () => {
    return (
        <div>
            <div className='flex flex-row  h-24 justify-between object-cover'>
                <img className='flex w-1/4' src={home1} alt="" />
                <img className='flex w-1/4' src={home2} alt="" />
                <img className='flex w-1/4' src={home3} alt="" />
                <img className='flex w-1/4' src={home4} alt="" />
            </div>
            {/* <div className='h-8 bg-green-700 my-2'></div> */}
        </div>
    )
}

export default Hero