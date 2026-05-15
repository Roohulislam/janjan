import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Whatsapp = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const message = "Hello! I have a question about your services.";

  // Responsive visibility
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      window.open(
        `https://wa.me/${+966548337615}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
      setTimeout(() => setIsVisible(true), 1000);
    }, 300);
  };

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: isHovered ? -5 : 0
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              onClick={handleClick}
              className={`
                bg-[#25D366] text-white p-4 rounded-full 
                shadow-lg hover:shadow-xl transition-all 
                duration-300 flex items-center justify-center
                relative overflow-hidden group
              `}
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp size={25} className="z-10" />
              
              {/* Pulse animation */}
              <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-100 group-hover:animate-ping duration-1000"></span>
              
              {/* Optional tooltip/text */}
              <motion.span 
                className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-sm whitespace-nowrap"
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : 10
                }}
              >
                Chat with us!
              </motion.span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Whatsapp;