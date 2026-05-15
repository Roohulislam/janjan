import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const GroupAssociate = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // All client names from your image
  const clients = [
    "Nombre", "RTCC", "SAIPEM", "FCC", "Samsung",
    "GUSAN", "LARSEN & TOURRO", "ALSTOM", "Arkad", "Sicim",
    "DENYS", "CRISTAL", "RAWABI", "acciona", "metso Outotec",
    "Test", "Dodsal", "KREFER", "TRONOX", "SIEMENS",
    "Superior", "ETROJET", "DAELIM", "FLUOR.", "NPCC"
  ];

  // Filter out "Nombre" (which appears to be a header in your image)
  const filteredClients = clients.filter(client => client !== "Nombre");

  useEffect(() => {
    // Check if mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Calculate scroll width
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Desktop carousel with drag functionality
  const DesktopCarousel = () => (
    <motion.div
      ref={carouselRef}
      className="overflow-hidden cursor-grab"
      whileTap={{ cursor: "grabbing" }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-8 py-4"
        animate={{
          x: [0, -width / 2],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 100,
            ease: "linear",
          },
        }}
      >
        {[...filteredClients, ...filteredClients].map((client, index) => (
          <motion.div
            key={index}
            className="min-w-[160px] flex items-center justify-center px-6 py-3 bg-white rounded-lg shadow-sm"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-700 font-medium text-center">{client}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  // Mobile carousel with auto-scroll only
  const MobileCarousel = () => {
    const itemWidth = 160;
    const gap = 16;
    const scrollWidth = (filteredClients.length * (itemWidth + gap)) - gap;

    return (
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 py-4"
          animate={{
            x: [0, -scrollWidth],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 200,
              ease: "linear",
            },
          }}
        >
          {[...filteredClients, ...filteredClients].map((client, index) => (
            <motion.div
              key={index}
              className="min-w-[140px] flex items-center justify-center px-4 py-3 bg-white  rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 font-medium text-sm text-center">{client}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#faf9f5]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-3xl  font-bold text-center text-gray-900 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          OUR CLIENTS
        </motion.h2>

        <div className="bg-sky-200 rounded-2xl p-6 md:p-8">
          {isMobile ? <MobileCarousel /> : <DesktopCarousel />}
        </div>
      </div>
    </section>
  );
};

export default GroupAssociate;