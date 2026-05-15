import { motion } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiArrowRight,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiInstagram
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#dacfd8] text-black pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* OUR COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gray-900 text-lg font-bold uppercase mb-4">OUR COMPANY</h3>
            <ul className="space-y-2">
              {['About Us', 'Introduction', 'Our Mission', 'Our Vision', 'Our Values', 'Our Services'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FiArrowRight className="mr-2 text-green-600" size={14} />
                  <a href="/aboutus" className="hover:text-green-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
                <FiInstagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* OUR SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gray-900 text-lg font-bold uppercase mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              {['General Construction', 'Waterproofing Solutions', 'Asphalt Works', 'Concrete Repair & Screeding', 'Flooring System', 'Interior Fit Out & Finishing Works'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FiArrowRight className="mr-2 text-green-600" size={14} />
                  <a href="/services" className="hover:text-green-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* GET IN TOUCH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gray-900 text-lg font-bold uppercase mb-4">GET IN TOUCH</h3>
            <p className="mb-4 text-gray-700">We're here to listen:</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-green-600" size={16} />
                <address className="not-italic text-gray-700">
                  Abdulrahman Ibn Al Harith, Al Bawadi Dist Jeddah 23531 Saudi Arabia
                </address>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-3 text-green-600" size={16} />
                <div>
                  <a href="tel:+966548337615" className="hover:text-green-600 transition-colors block">
                    +966 54 833 7615
                  </a>
                  <a href="tel:+966533400701" className="hover:text-green-600 transition-colors block">
                    +966 53 340 0701
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <FiMail className="mr-3 text-green-600" size={16} />
                <div>
                  <a href="mailto:contact@saudibuildpro.com" className="hover:text-green-600 transition-colors block">
                    contact@saudibuildpro.com
                  </a>
                  <a href="mailto:rohailjan726@gmail.com" className="hover:text-green-600 transition-colors block">
                    rohailjan726@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* OUR LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-gray-900 text-lg font-bold uppercase mb-4">OUR LOCATION</h3>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-48 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.21566095502!2d39.163192174214544!3d21.60764833640384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d106415b94e9%3A0xd6330325886de533!2z2YXYpNiz2LPYqSDYp9mE2LXZgdmI2Kkg2YHZiNmFINmE2YTZhdmC2KfZiNmE2KfYqiDYp9mE2LnYp9mF2Kk!5e1!3m2!1sen!2s!4v1755591791664!5m2!1sen!2s" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Google Maps Location"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>View larger map</span>
                  <span>©2025 Google</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-6 border-t border-gray-300 text-center text-sm text-gray-700"
        >
          <p>© 2025 SaudiBuildPro Contractor. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;