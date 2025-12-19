import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full bg-black text-gray-300 py-8 px-4 flex flex-col justify-center items-center border-t border-gray-800">
            <div className="flex gap-6 mb-4">
                <a href="https://www.linkedin.com/in/ramkumar-aws" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <FaLinkedin size={24} />
                </a>
                {/* Placeholder for Github if available, or just generic */}
                {/* <a href="#" className="hover:text-primary transition-colors"><FaGithub size={24} /></a> */}
            </div>
            <p className="text-sm text-center">
                © 2025 Ramkumar. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
