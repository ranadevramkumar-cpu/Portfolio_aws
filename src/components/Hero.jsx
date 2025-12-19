import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-background via-background to-secondary/30 relative overflow-hidden">
            {/* Background Decor - simple gradients/blobs for now */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-[100px]"></div>

            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 text-center md:text-left md:flex-row">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center h-full md:w-1/2"
                >
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">
                        Hi, I'm <span className="text-primary">Ramkumar</span>
                    </h2>
                    <h3 className="text-2xl sm:text-4xl font-bold text-gray-300 mt-4">
                        AWS Cloud Practitioner
                    </h3>
                    <p className="text-gray-400 py-4 max-w-md text-lg">
                        Passionate about building scalable cloud architectures and secure infrastructure.
                        Focused on continuous learning and implementing AWS best practices.
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <Link to="projects" smooth duration={500} offset={-70}>
                            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-primary to-orange-600 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/25">
                                View Projects
                            </button>
                        </Link>
                        <a href="/resume.pdf" download={true}> {/* Placeholder for actual resume download */}
                            <button className="group text-primary w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-primary hover:bg-primary/10 cursor-pointer transition-all duration-300">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* Hero Image / Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
                >
                    {/* Placeholder for Profile Image or Cloud Graphic */}
                    <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-secondary rounded-full p-1 shadow-2xl shadow-primary/30">
                        <div className="w-full h-full bg-background rounded-full flex items-center justify-center overflow-hidden">
                            <span className="text-6xl text-gray-600">☁️</span>
                            {/* <img src={HeroImage} alt="Ramkumar" className="rounded-2xl mx-auto w-2/3 md:w-full" /> */}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
