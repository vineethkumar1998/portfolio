import React, { useState, memo } from 'react';
import { Link,useLocation  } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';
import { SiWebpack } from "react-icons/si";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuItemClicked = () => {
        setIsMobileMenuOpen(false);
    };

    const isActive = (path) => location.pathname === path;

    const menuItems = [
        { id: 1, label: "Home", path: "/" },
        // { id: 2, label: "About", path: "/about" },
        { id: 3, label: "Experience", path: "/experience" },
        { id: 4, label: "Skills", path: "/skills" },
        { id: 5, label: "Contact", path: "/contact" }
    ];

    return (
        <header className="fixed top-0 md:top-3 left-1/2 transform -translate-x-1/2 w-full md:w-10/12 h-16 bg-gray-900 shadow-md z-50 rounded-xl md:rounded-2xl">
            <div className="w-full flex justify-between items-center p-4 md:pl-16 md:pr-16">
                <Link to="/" className="text-amber-500 text-xl md:text-2xl font-semibold flex gap-3"><SiWebpack  className='size-8 text-purple-600'/>VINEETH</Link>
                <nav className="hidden md:flex space-x-4">
                    <ul className="flex space-x-8 text-xl">
                        {menuItems.map(item => (
                            <li key={item.id}>
                                <Link
                                    to={item.path}
                                    className={`text-amber-500 hover:bg-gray-700 p-2 rounded-md transition duration-300 ease-in-out ${isActive(item.path) ? "bg-gray-700" : ""}`} 
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    onClick={toggleMobileMenu}
                    className={`md:hidden text-amber-400 ${isMobileMenuOpen ? 'hidden' : ''}`}
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <CiMenuBurger size={30} />
                </button>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        className="md:hidden fixed inset-0 bg-slate-800 z-20 flex flex-col items-center pt-24"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button
                            onClick={toggleMobileMenu}
                            className="absolute top-4 right-4 text-amber-400"
                            aria-label="Close menu"
                        >
                            <IoIosClose size={30} />
                        </button>
                        <ul className="space-y-6 text-lg md:text-xl">
                            {menuItems.map(item => (
                                <li key={item.id}>
                                    <Link
                                        to={item.path}
                                        onClick={handleMenuItemClicked}
                                        className="text-amber-400 transition p-2 rounded  duration-300 ease-in-out"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default memo(Navbar);
