import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { qhseTabs, qhseContent } from '../Data/qhse';

const QHSE = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    const content = qhseContent[activeTab];
    
    if (activeTab === 'about') {
      return (
        <>
          {content.content.map((item, index) => {
            if (typeof item === 'string') {
              return (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {item}
                </p>
              );
            } else if (typeof item === 'object') {
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg my-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.commitment?.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-sky-600 mr-2">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </>
      );
    }

    if (activeTab === 'quality' || activeTab === 'health' || activeTab === 'environmental') {
      return (
        <div className="space-y-8">
          {content.content.map((item, index) => {
            if (typeof item === 'string') {
              return <p key={index} className="text-gray-700">{item}</p>;
            } else if (typeof item === 'object') {
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2">
                    {item.items?.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-sky-600 mr-2">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            return null;
          })}
        </div>
      );
    }

    if (activeTab === 'certification' || activeTab === 'specializations') {
      return (
        <div className="space-y-8">
          <p className="text-gray-700 mb-6">{content.content[0]}</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2">
              {content.content[1].items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-sky-600 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="bg-white py-1 px-4 sm:px-2 lg:px-2">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-1">
        <div className="bg-gradient-to-r from-sky-500 to-sky-400 rounded-xl p-2 md:p-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-bold mb-1"
          >
            Quality, Health, Safety & Environment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm md:text-xl max-w-3xl"
          >
            Our commitment to excellence in all construction projects across Saudi Arabia
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white shadow-md rounded-xl p-6 sticky top-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">QHSE Policies</h2>
              <nav className="space-y-2">
                {qhseTabs.map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-sky-500 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-md rounded-xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-400">
                {qhseContent[activeTab].title}
              </h3>
              <div className="prose max-w-none">
                {renderContent()}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QHSE;