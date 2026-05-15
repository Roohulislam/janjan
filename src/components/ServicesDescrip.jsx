import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

const ServicesDescrip = () => {
  const [activeService, setActiveService] = useState('Project Management');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = {
    'Project Management': {
      description: 'End-to-end project management solutions ensuring your construction projects are delivered on time, within budget, and to the highest quality standards.',
      details: [
        'Comprehensive project planning and scheduling',
        'Risk management and mitigation strategies',
        'Cost control and budget management',
        'Stakeholder coordination and communication',
        'Quality assurance and control programs'
      ],
      icon: '📊'
    },
    'Engineering': {
      description: 'Full-spectrum engineering services from conceptual design to detailed engineering documentation.',
      details: [
        'Structural analysis and design',
        'Mechanical systems engineering',
        'Electrical and instrumentation design',
        '3D modeling and BIM services',
        'Regulatory compliance and permitting'
      ],
      icon: '📐'
    },
    'Procurement': {
      description: 'Streamlined procurement processes to secure high-quality materials and equipment at competitive prices.',
      details: [
        'Vendor qualification and management',
        'Material requisition and expediting',
        'Logistics and supply chain coordination',
        'Quality inspection and testing',
        'Inventory control systems'
      ],
      icon: '📦'
    },
    'Civil Construction': {
      description: 'Complete civil works solutions for all types of construction projects.',
      details: [
        'Site preparation and earthworks',
        'Concrete structure construction',
        'Underground utilities installation',
        'Roads and paving works',
        'Landscaping and final grading'
      ],
      icon: '🏗️'
    },
    'Mechanical Fabrication': {
      description: 'Precision fabrication services utilizing state-of-the-art equipment and skilled craftsmen.',
      details: [
        'Pressure vessel fabrication',
        'Piping systems fabrication',
        'Structural steel fabrication',
        'Custom metalwork solutions',
        'ASME code welding services'
      ],
      icon: '⚙️'
    },
    'Mechanical Erection': {
      description: 'Professional installation and erection of mechanical systems and equipment.',
      details: [
        'Heavy equipment installation',
        'Piping system erection',
        'Alignment and leveling services',
        'Rigging and heavy lift planning',
        'Pre-commissioning assistance'
      ],
      icon: '🏭'
    },
    'E & I Installation': {
      description: 'Electrical and instrumentation installation services meeting all industry standards.',
      details: [
        'Power distribution systems',
        'Control system installation',
        'Instrument calibration and testing',
        'Hazardous area installations',
        'Cable management systems'
      ],
      icon: '🔌'
    },
    'Operations & Maintenance': {
      description: 'Comprehensive solutions to keep your facilities operating at peak efficiency.',
      details: [
        'Preventive maintenance programs',
        'Predictive maintenance technologies',
        'Equipment troubleshooting',
        'Spare parts management',
        'Reliability engineering'
      ],
      icon: '🛠️'
    },
    'Commissioning & Turnarounds': {
      description: 'Expert services to ensure smooth project startups and efficient shutdowns.',
      details: [
        'Pre-commissioning checks',
        'System energization procedures',
        'Performance testing',
        'Turnaround planning',
        'Shutdown maintenance services'
      ],
      icon: '🔄'
    }
  };

  return (
    <section style={{ backgroundColor: "#faf9f5" }} className="py-2 px-2 sm:px-6 lg:px-8">
      {/* Heading with gray background */}
      <div className="bg-gray-100 py-12 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
          >
            OUR SERVICES
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar - 1/3 width */}
          <div className="lg:w-1/3">
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden bg-blue-600 text-white p-4 flex items-center justify-between w-full mb-4 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span>Our Services</span>
              <FiChevronRight className={`transition-transform ${mobileMenuOpen ? 'rotate-90' : ''}`} />
            </button>

            {/* Sidebar Navigation */}
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} lg:block bg-white shadow-md rounded-lg overflow-hidden sticky top-8`}>
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Services</h2>
              </div>
              <nav className="p-4">
                {Object.keys(services).map((service) => (
                  <motion.div
                    key={service}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      onClick={() => {
                        setActiveService(service);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors mb-2 flex items-center ${
                        activeService === service
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      <span className="text-xl mr-3">{services[service].icon}</span>
                      <span>{service}</span>
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>
          </div>

          {/* Right content area - 2/3 width */}
          <div className="lg:w-2/3">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{services[activeService].icon}</span>
                  <h1 className="text-3xl font-bold text-gray-800">{activeService}</h1>
                </div>
                
                <p className="text-lg text-gray-600 mb-6">{services[activeService].description}</p>
                
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Features:</h2>
                <ul className="space-y-3">
                  {services[activeService].details.map((detail, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Additional Information</h3>
                <p className="text-gray-600">
                  Our {activeService.toLowerCase()} services are tailored to meet your specific project requirements. 
                  Contact us today to discuss how we can support your construction needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDescrip;