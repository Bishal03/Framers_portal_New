import { Link } from "react-router-dom";
import logo from '../images/Logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import menuImg from '../images/navbar-bg.jpg'

const navigation = [
  { name: 'About us', to: '/' },
  { name: 'Features', to: '/home' },
  { name: 'Scheme', to: '/home' },
  { name: 'Company', to: '/' },
];
const Menu = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <div className=" ">
      <header className=" inset-x-0 top-0 z-20">
                <nav className="flex items-center object-cover justify-between p-2 lg:px-8" aria-label="Global" style={{backgroundImage:`url(${menuImg})`}}>
                    <div className="flex lg:flex-1  h-16">
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
                            Get Started <span aria-hidden="true">&rarr;</span>
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
                                        Get started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
      </div>
    </div>
  );
}

export default Menu;
