import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div name="contact" className="w-full min-h-screen bg-background text-white py-20 px-4 flex justify-center items-center">
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-primary">
                        Contact
                    </p>
                    <p className="py-6 text-gray-400">Submit the form below or shoot me an email</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 justify-center">
                        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg shadow-lg">
                            <FaEnvelope size={24} className="text-primary" />
                            <div>
                                <p className="font-bold text-gray-300">Email</p>
                                <p className="text-sm sm:text-base break-all">ranadevramkumar@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg shadow-lg">
                            <FaPhoneAlt size={24} className="text-primary" />
                            <div>
                                <p className="font-bold text-gray-300">Phone</p>
                                <p className="text-sm sm:text-base">8056780856</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg shadow-lg">
                            <FaMapMarkerAlt size={24} className="text-primary" />
                            <div>
                                <p className="font-bold text-gray-300">Location</p>
                                <p className="text-sm sm:text-base">Andipatti, Theni District, India</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg shadow-lg">
                            <FaLinkedin size={24} className="text-primary" />
                            <div>
                                <p className="font-bold text-gray-300">LinkedIn</p>
                                <a href="https://www.linkedin.com/in/ramkumar-aws" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-primary hover:underline">
                                    linkedin.com/in/ramkumar-aws
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form action="" className="flex flex-col gap-4 w-full">
                        <input
                            type="text"
                            placeholder="Name"
                            className="p-3 bg-[#ccd6f6] rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="p-3 bg-[#ccd6f6] rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Message"
                            className="p-3 bg-[#ccd6f6] rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        ></textarea>
                        <button className="text-white bg-gradient-to-r from-primary to-orange-600 px-6 py-3 my-2 mx-auto flex items-center rounded-md hover:scale-105 duration-300 font-bold shadow-lg shadow-primary/30">
                            Let's Talk
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contact;
