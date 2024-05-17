import loginImg from '../images/login.jpg';
import { FcGoogle } from "react-icons/fc";
import backImg from '../images/login3.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-opacity-5' style={{ backgroundImage: `url(${backImg})` }}>
            <div className="mx-auto w-full max-w-[1000px] h-auto flex flex-col md:flex-row rounded-md overflow-hidden shadow-lg bg-white">
                <div className="w-full md:w-1/2 h-80 md:h-auto flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${loginImg})` }}>
                    <div className="text-center">
                        <h1 className="text-4xl text-white font-bold my-4">Unlocking Intelligence,<br />One Login at a Time</h1>
                        <p className='text-xl text-white font-normal'>Start for Free and get more reality result from our community.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2 bg-gray-100 flex flex-col p-8 md:p-30 justify-between items-center'>
                    <h1 className='text-3xl text-[#060606] font-semibold mb-4'>Farmers Portal</h1>
                    <div className='w-full max-w-[500px]'>
                        <div className='w-full flex flex-col mb-4'>
                            <h3 className='text-2xl text-[#060606] font-semibold mb-2'>Login in</h3>
                            <p className='text-base mb-2'>Welcome back! Please enter Your details.</p>
                        </div>
                        <form className='w-full flex flex-col' onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder='Email' className='w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
                            <input type="password" placeholder='Password' className='w-full text-[#060606] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none' />
                            <div className='w-full flex  items-center justify-between'>
                                <div className='w-full flex items-center'>
                                    <input type="checkbox" className='w-4 h-4 mr-2' />
                                    <p className='text-sm'>Remember Me</p>
                                </div>
                                <p className='text-sm  font-medium  whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot password ?</p>

                            </div>
                            <button type='submit' className='w-full my-4 bg-[#060606] rounded-md font-semibold p-3 text-white text-center'>Log in</button>
                        </form>
                        <div className='w-full flex items-center justify-center relative py-2'>
                            <div className='w-full h-[1px] bg-black'></div>
                            <p className='text-base bg-gray-100 absolute inset-x-0 text-center'>or</p>
                        </div>
                        <div className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-3 flex items-center justify-center'>
                            <div className='mr-2 flex'><FcGoogle /></div>
                            Sign In with Google
                        </div>
                        <div className='flex items-center justify-center w-full'>
                            <p className='text-sm font-normal text-[#060606]'>Already have an account? <Link to='/signup' className='font-semibold underline underline-offset-2 cursor-pointer'>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

