import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import backImg from '../../images/navbar-bg.jpg';
import backImg1 from '../../images/img_1.jpg';
import { FaHome } from "react-icons/fa";
import { BiAnchor } from "react-icons/bi";// Assuming the correct path to your image
import aboutImg from '../../images/about.jpg'
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.png'


const navigation = [
    { name: 'About us', to: '/' },
    { name: 'Features', to: '/home/crop-management' },
    { name: 'Scheme', to: '/home' },
    { name: 'Company', to: '/' },
];
const Hero = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className='absolute'>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center object-cover justify-between p-2 lg:px-8" aria-label="Global" style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }}>
                    <div className="flex lg:flex-1 h-16">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-full w-auto object-cover"
                                src={logo}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-900">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link to='/login' className="text-sm font-semibold leading-6 text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </nav>
                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src={logo}
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.to}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        to="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <div className=''>
                <div className=" relative isolate px-6 pt-14 lg:px-8" style={{ backgroundImage: `url(${backImg1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom' }} >
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-45">
                        <div className="text-center">
                            <h1 className="text-6xl font-bold tracking-tight text-whilte sm:text-6xl">
                                AGRICULTURE
                            </h1>
                            <p className='mt-5 text-2xl'>Excellent Software Programe</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <Link
                                    to='/login'
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Get started
                                </Link>
                                <Link to="/about" className="text-sm text-white font-semibold leading-6 ">
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='relative bottom-20 w-20% flex my-10 justify-center'> {/* Parent container for centering */}
                    <div className='w-full ml-10 mr-10'> {/* Adjust width as needed */}
                        <div className='w-full flex flex-col h-96 lg:flex-row '>
                            <div className='w-full bg-white flex flex-col items-center justify-center lg:w-1/2 '>
                                <div className='justify-center text-6xl text-brown'>
                                    <FaHome></FaHome>
                                </div>
                                <h1 className='text-4xl text-brown'>A family Owned farm</h1>
                                <div className='px-16 py-2 text-xl'>
                                    <p className=''>Agriculture is a diversified family farm which produces beyond-organic,
                                        nutrient dense foods. We are passionate about producing food of the highest quality using sustainable practices.</p>
                                </div>
                                <button className='rounded-md bg-indigo-600 mt-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>About us</button>
                            </div>
                            <div className=' w-full bg-brown flex flex-col items-center justify-center lg:w-1/2'>
                                <div className='text-6xl text-white'>
                                    <BiAnchor></BiAnchor>
                                </div>
                                <h1 className='text-4xl text-white'>Our Main Service</h1>
                                <p className='px-16 py-2 text-xl text-white'>In this ever-changing world of agriculture, our core values are constant. They underlie our work, how we interact with each other and which strategies we employ to fulfill our mission in proper way.</p>
                                <button className='rounded-md bg-indigo-600 mt-10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>View More</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-20% h-96 flex justify-center'> {/* Parent container for centering */}
                <div className='w-full ml-10 mr-10'> {/* Adjust width as needed */}
                    <div className='w-full flex flex-col  lg:flex-row '>
                        <div className='w-full p-4 flex h-80 flex-col items-end justify-center lg:w-1/2  '>
                            <div className='object-cover rounded-xl'>
                                <img src={aboutImg} alt="" className='object-cover h-80 rounded-xl' />
                            </div>
                        </div>
                        <div className=' w-full p-4 flex flex-col justify-center lg:w-1/2'>
                            <h1 className='text-4xl text-black'>About us</h1>
                            <p className='text-lg text-black '>At Farmers Portal, we are passionate about revolutionizing agriculture through cutting-edge technology and sustainable practices. Our mission is to empower farmers with smart solutions that optimize productivity, conserve resources, and promote environmental stewardship.<br />


                                Join us in shaping the future of farming. Explore our services, learn about our sustainable practices, and discover how [Your Smart Farming Website] can help you grow smarter, greener, and more efficiently.</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Hero;
