import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div name="about" className="w-full min-h-screen bg-background text-white py-20 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-primary">
                        About
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-xl text-gray-300">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="mt-4 leading-relaxed">
                            Hello! I'm <span className="text-primary font-bold">Ramkumar</span>, an aspiring Cloud Engineer based in Theni, India.
                            With a background in <span className="text-white font-semibold">B.Sc Mathematics</span>,
                            I bring strong analytical and problem-solving skills to the world of Cloud Computing.
                        </p>
                        <p className="mt-4 leading-relaxed">
                            I have recently completed my training as an <span className="text-white font-semibold">AWS Cloud Practitioner</span>,
                            where I gained hands-on experience with core AWS services like EC2, S3, IAM, and VPC.
                            My journey into tech is driven by a curiosity to understand how modern internet infrastructure works at scale.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="mt-4 leading-relaxed">
                            Beyond cloud architecture, I have a creative side with expertise in <span className="text-white font-semibold">Adobe Photoshop</span>.
                            I believe that a blend of technical logic and creative design allows me to approach problems from unique perspectives.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-secondary/50 rounded-lg border-l-4 border-primary hover:bg-secondary transition-colors">
                                <h3 className="font-bold text-white">Problem Solver</h3>
                                <p className="text-sm text-gray-400">Analytical approach from Math background</p>
                            </div>
                            <div className="p-4 bg-secondary/50 rounded-lg border-l-4 border-blue-500 hover:bg-secondary transition-colors">
                                <h3 className="font-bold text-white">Creative Mind</h3>
                                <p className="text-sm text-gray-400">Digital design & visual communication</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
