import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'projects' },
        { id: 5, link: 'resume' },
        { id: 6, link: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center h-full">
                <div className="flex items-center">
                    <Link to="home" smooth duration={500} className="font-bold text-2xl cursor-pointer text-white">
                        Ram<span className="text-primary">kumar</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex">
                    {links.map(({ id, link }) => (
                        <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-primary transition-colors duration-200">
                            <Link to={link} smooth duration={500} offset={-70}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Nav Icon */}
                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-gray-300 md:hidden">
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {nav && (
                        <motion.ul
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-background/95 backdrop-blur-lg md:hidden"
                        >
                            {links.map(({ id, link }) => (
                                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300 hover:text-primary">
                                    <Link onClick={() => setNav(false)} to={link} smooth duration={500}>
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
