import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
    return (
        <div name="resume" className="w-full bg-secondary/20 text-white py-20 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center w-full h-full">
                <div className="pb-8 w-full">
                    <p className="text-4xl font-bold inline border-b-4 border-primary">
                        Resume
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full mt-8 items-center">

                    <div className="flex flex-col gap-6">
                        <h3 className="text-3xl font-bold text-gray-200">
                            Check out my <span className="text-primary">Credentials</span>
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I am actively looking for opportunities as an AWS Cloud Practitioner.
                            My resume details my educational background in Mathematics, my recent cloud certification,
                            and my hands-on project experience.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a
                                href="/resume.pdf"
                                download={true}
                                className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-primary/40"
                            >
                                <FaDownload /> Download PDF
                            </a>
                        </div>
                    </div>

                    {/* Resume Preview / Visual Placeholder */}
                    <div className="w-full h-[500px] bg-white rounded-lg shadow-2xl overflow-hidden relative group">
                        {/* Embed PDF or Image of Resume here */}
                        <iframe
                            src="/resume.pdf"
                            className="w-full h-full border-0"
                            title="Resume Preview"
                        >
                            <div className="flex items-center justify-center h-full text-gray-800">
                                <p>Preview not available on mobile. Please download.</p>
                            </div>
                        </iframe>

                        {/* Overlay for better aesthetic on hover (optional) */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 pointer-events-none transition-colors duration-300" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Resume;
