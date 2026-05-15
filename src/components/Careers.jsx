import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { careersTabs, careersContent } from '../Data/careers';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('careers');

  const renderContent = () => {
    const content = careersContent[activeTab];
    
    if (activeTab === 'careers') {
      return (
        <>
          {content.content.map((item, index) => {
            if (item.type === 'paragraph') {
              return (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              );
            }
            if (item.type === 'highlight') {
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg my-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">
                    {item.title}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {item.items.map((point, i) => (
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

    if (activeTab === 'about') {
      return (
        <div className="space-y-8">
          {content.content.map((item, index) => {
            if (item.type === 'section') {
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.items.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-sky-600 mr-2">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            if (item.type === 'process') {
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    {item.steps.map((step, i) => (
                      <li key={i} className="text-gray-700">{step}</li>
                    ))}
                  </ol>
                </div>
              );
            }
            return null;
          })}
        </div>
      );
    }

    if (activeTab === 'apply') {
      return (
        <div className="space-y-8">
          {content.content.map((item, index) => {
            if (item.type === 'positions') {
              return (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Available Positions in Saudi Arabia</h3>
                  {item.jobs.map((job, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-lg text-gray-800">{job.title}</h4>
                          <p className="text-gray-600 mb-1">{job.location} | {job.department}</p>
                          <p className="text-sm text-gray-700 mb-2">{job.specialization}</p>
                        </div>
                        <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm font-medium">
                          {job.salary}
                        </span>
                      </div>
                      <button className="mt-3 text-sky-600 hover:underline font-medium">
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>
              );
            }
            if (item.type === 'general') {
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">General Application</h3>
                  <p className="mb-4 text-gray-700">{item.text}</p>
                  <div className="flex gap-4">
                    <button className="bg-sky-600 text-white px-6 py-2 rounded-lg hover:bg-sky-700 transition-colors">
                      Submit Application
                    </button>
                    <button className="border border-sky-600 text-sky-600 px-6 py-2 rounded-lg hover:bg-sky-50 transition-colors">
                      Upload CV
                    </button>
                  </div>
                </div>
              );
            }
            return null;
          })}
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
            Career Opportunities at SaudibuildPro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm md:text-xl max-w-3xl"
          >
            Join our SCA Grade 1 construction team working on Saudi Vision 2030 projects
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-2">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white shadow-md rounded-xl p-6 sticky top-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">Careers</h2>
              <nav className="space-y-2">
                {careersTabs.map((tab) => (
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
                {careersContent[activeTab].title}
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

export default Careers;