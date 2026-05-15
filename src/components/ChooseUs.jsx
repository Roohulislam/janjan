import { motion } from "framer-motion";
import { useState } from "react";

import chooseUsBanner from "../assets/services/whychoose.png";
import qualityBadge from "../assets/services/qs.png";
import deliveryIcon from "../assets/services/timly.png";
import experienceIcon from "../assets/services/experience.png";
import globalIcon from "../assets/services/global.png";

const ChooseUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const features = [
    {
      title: "Quality Assurance",
      description: "Certified standards for every project",
      icon: qualityBadge,
    },
    {
      title: "Timely Delivery",
      description: "On-schedule completion every time",
      icon: deliveryIcon,
    },
    {
      title: "Experienced Team",
      description: "Trusted professionals with decades of expertise",
      icon: experienceIcon,
    },
    {
      title: "Global Projects",
      description: "Serving clients worldwide",
      icon: globalIcon,
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-gray-900 uppercase mb-4"
          >
            Why Choose Us
          </motion.h2>
          <div className="w-20 h-1 bg-blue-950 mx-auto"></div>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative h-full rounded-xl overflow-hidden shadow-lg group">
              <img
                src={chooseUsBanner}
                alt="Why Choose Us Banner"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center"
              >
                <motion.p
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  className="text-white text-lg md:text-xl font-semibold px-4 text-center"
                >
                  Decades of Excellence in Engineering
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:w-1/2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                At <span className="font-semibold">SaudiBuildPro</span>, we deliver flexible, reliable, and cost-effective solutions for
                diverse operations and maintenance needs across industries.
              </p>

              <ul className="list-disc list-inside text-gray-700 text-base md:text-lg mb-6 space-y-1">
                <li>Sea port operations & services</li>
                <li>Comprehensive medical facilities</li>
                <li>Medical & non-medical maintenance</li>
              </ul>

              {isExpanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="list-disc list-inside text-gray-700 text-base md:text-lg space-y-1 mb-6"
                >
                  <li>Catering & hospitality support</li>
                  <li>General contracting & civil works</li>
                  <li>Electrical & mechanical services</li>
                  <li>Water & sanitation systems</li>
                  <li>Cleaning & facility upkeep</li>
                  <li>Industrial-scale facility O&M</li>
                  <li>Private security services</li>
                </motion.ul>
              )}

              <button
                onClick={toggleReadMore}
                className="flex items-center text-sky-500 font-semibold hover:text-yellow-600 transition-colors mb-8 lg:mb-12"
              >
                {isExpanded ? "Read Less" : "Read More"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ml-2 transition-transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -5 }}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    style={{ backgroundColor: "#329ab1" }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                    />
                  </motion.div>
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
