import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiAmazonec2, SiAmazons3, SiAmazoniam, SiAmazonrds, SiAdobephotoshop } from 'react-icons/si';
import { BiNetworkChart, BiShieldQuarter } from 'react-icons/bi';

const Skills = () => {

    const skills = [
        {
            id: 1,
            category: "AWS Services",
            items: [
                { name: "EC2", icon: <SiAmazonec2 size={40} className="text-orange-500" /> },
                { name: "S3", icon: <SiAmazons3 size={40} className="text-green-500" /> },
                { name: "IAM", icon: <SiAmazoniam size={40} className="text-red-500" /> },
                { name: "RDS", icon: <SiAmazonrds size={40} className="text-blue-500" /> },
                { name: "VPC", icon: <FaAws size={40} className="text-yellow-500" /> }, // Generic AWS for VPC for now
            ]
        },
        {
            id: 2,
            category: "Cloud Concepts & Tools",
            items: [
                { name: "Security", icon: <BiShieldQuarter size={40} className="text-purple-500" /> },
                { name: "Networking", icon: <BiNetworkChart size={40} className="text-blue-400" /> },
                { name: "Linux", icon: <FaLinux size={40} className="text-white" /> },
                { name: "Git", icon: <FaGitAlt size={40} className="text-orange-600" /> },
            ]
        },
        {
            id: 3,
            category: "Design",
            items: [
                { name: "Photoshop", icon: <SiAdobephotoshop size={40} className="text-blue-600" /> },
            ]
        }
    ];

    return (
        <div name="skills" className="w-full min-h-screen bg-background text-white py-20 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-primary">
                        Skills
                    </p>
                    <p className="py-6 text-gray-400"> Technologies and tools I work with</p>
                </div>

                <div className="grid gap-8">
                    {skills.map((category, index) => (
                        <div key={category.id} className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-300 mb-6 border-l-4 border-secondary pl-4">{category.category}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
                                {category.items.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.05 }}
                                        className="shadow-md shadow-[#040c16] hover:shadow-primary/50 bg-secondary/30 rounded-lg py-6 flex flex-col items-center justify-center transition-all duration-300 min-h-[140px]"
                                    >
                                        <div className="mb-4">{skill.icon}</div>
                                        <p className="text-lg font-medium">{skill.name}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
