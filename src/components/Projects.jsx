import React from 'react';
import { motion } from 'framer-motion';
import { SiAmazons3, SiAmazonec2, SiAdobephotoshop, SiAmazoniam } from 'react-icons/si';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "AWS Cloud Fundamentals Practice",
            category: "Cloud Engineering",
            description: "Hands-on implementation of core AWS services including S3 bucket management, EC2 instance deployment, and IAM user role configuration. Explored pricing models and security best practices.",
            techStack: [
                { name: "S3", icon: <SiAmazons3 /> },
                { name: "EC2", icon: <SiAmazonec2 /> },
                { name: "IAM", icon: <SiAmazoniam /> },
            ],
            color: "from-blue-500 to-cyan-500"
        },
        {
            id: 2,
            title: "Digital Design Portfolio",
            category: "Creative Design",
            description: "A collection of high-quality digital designs created using Adobe Photoshop. Includes image optimization techniques for web performance and visual storytelling.",
            techStack: [
                { name: "Photoshop", icon: <SiAdobephotoshop /> },
                { name: "Design", icon: null },
            ],
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <div name="projects" className="w-full min-h-screen bg-background text-white py-20 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-primary">
                        Projects
                    </p>
                    <p className="py-6 text-gray-400">Check out some of my recent work</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 px-0 sm:px-0">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -10 }}
                            className="bg-secondary/40 rounded-xl overflow-hidden shadow-lg shadow-[#040c16] border border-gray-700 hover:border-primary transition-all duration-300"
                        >
                            <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-xs font-semibold px-2 py-1 bg-gray-800 rounded-full text-gray-400">
                                        {project.category}
                                    </span>
                                </div>

                                <p className="text-gray-300 mb-6 min-h-[80px]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    {project.techStack.map((tech, idx) => (
                                        <div key={idx} className="flex items-center gap-1 text-sm text-gray-400 bg-background px-3 py-1 rounded-full border border-gray-700">
                                            {tech.icon} <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {/* Placeholder Buttons */}
                                    <button className="px-4 py-2 bg-gradient-to-r from-primary to-orange-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                                        View Details
                                    </button>
                                    <button className="px-4 py-2 border border-gray-600 rounded-lg text-gray-300 font-medium hover:bg-gray-800 transition-colors">
                                        Tech Specs
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
