import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './context/SearchContext';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs';
import ServicesDescrip from './components/ServicesDescrip';
import Resources from './components/Resources';
import Projects from './components/Projects';
import QHSE from './components/QHSE';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Services from './components/Services/Services';
import SearchResults from './pages/SearchResults';
import Whatsapp from './components/Whatsapp';

const App = () => {
  return (
    <BrowserRouter> 
          <SearchProvider>  
      <div className="w-full overflow-x-hidden">
        <Navbar />
        {/* Main content container with top padding */}
<div className="mx-auto w-full max-w-[1800px] px-1 sm:px-3 lg:px-4 pt-0.5 sm:pt-4 md:pt-1 lg:pt-20 xl:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/servicedescrip" element={<ServicesDescrip />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/qhse" element={<QHSE />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/search" element={<SearchResults/> } />
          </Routes>
        </div>
        <Whatsapp/>
        <Footer />
      </div>
       </SearchProvider>
    </BrowserRouter>
  );
};

export default App;