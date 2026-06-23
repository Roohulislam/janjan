import React, { useState } from "react";
import { motion } from "framer-motion";

// Example: Import your 14 images (put correct paths)
import img1 from "../assets/Certificates/41.png";
import img2 from "../assets/Certificates/42.png";
import img3 from "../assets/Certificates/14.png";
import img4 from "../assets/Certificates/43.png";
import img5 from "../assets/Certificates/18.png";
import img6 from "../assets/Certificates/22.png";
import img7 from "../assets/Certificates/25.png";
import img8 from "../assets/Certificates/12.png";
import img9 from "../assets/Certificates/26.png";
import img10 from "../assets/Certificates/29.png";
import img11 from "../assets/Certificates/30.png";
import img12 from "../assets/Certificates/24.png";
import img13 from "../assets/Certificates/15.png";
import img14 from "../assets/Certificates/19.png";
// Import your logo (transparent background)
import logo from "../assets/logos/favicon_io/l2.png";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14
];

const Resources = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="text-center mb-2">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-bold text-gray-900"
        >
          Our Equipments Range Gallery
        </motion.h1>
        <p className="mt-1 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          A showcase of our recent construction Equipments Range.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => openImage(img)}
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* Overlay with Logo */}
            <div className="absolute inset-0 bg-sky-100 bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-64 h-64 object-contain opacity-90"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full-screen image modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-sky-50 bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div className="relative max-w-6xl w-full max-h-screen">
            <button 
              className="absolute top-4 right-4 text-black text-3xl z-50 hover:text-black"
              onClick={closeImage}
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Full screen" 
              className="max-w-full max-h-screen mx-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Resources;