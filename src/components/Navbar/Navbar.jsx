import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import s1Logo from "../../assets/logos/favicon_io/l2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setSearchQuery("");
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/search");
      setIsSearchOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-opacity-90" : ""
      }`}
      style={{ backgroundColor: "#cac0c8" }}
    >
     <div className="hidden lg:flex items-center justify-between px-4 py-0">
  <div className="flex items-center space-x-2">
    <div className="h-16  flex items-center"> {/* Fixed container */}
      <img 
        src={s1Logo} 
        alt="Company Logo" 
        className="h-40 pt-9 w-auto object-contain" // Increased image size
      />
    </div>
    <div className="text-black">
      <h1 className="text-xl font-bold">SaudiBuildPro Contractor</h1>
      <p className="text-sm">مقاول سعودي بيلد برو</p>
    </div>
  </div>
  
  <div className="flex items-center space-x-2">
    <button 
      className="px-3 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-skys-700 transition" 
      style={{ backgroundColor: "#1e4a7a" }}
      onClick={() => navigate("/employee-login")}
    >
      EMPLOYEE LOGIN
    </button>
    <button 
      className="px-3 py-1.5 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
      onClick={() => navigate("/company-profile")}
    >
      COMPANY PROFILE
    </button>
  </div>
</div>
      {/* Main Navigation */}
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
          {/* Mobile logo and heading */}
<div className="flex items-center lg:hidden">
  <img 
    src={s1Logo} 
    alt="Company Logo" 
    className="h-12 sm:h-10 object-contain" // Responsive logo size
  />
  <div className="text-black ml-2">
    <h1 className="text-xs sm:text-sm font-medium">SaudiBuildPro Contractor</h1>
    <p className="text-[10px] sm:text-xs">مقاول سعودي بيلد برو</p>
  </div>
</div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <NavLink to="/" text="HOME" />
              <NavLink to="/aboutus" text="ABOUT US" />
              <NavLink to="/services" text="SERVICES" />
              <NavLink to="/resources" text="EQUIPMENTS GALLERY" />
              
              {/* Projects Dropdown */}
              <div className="relative group">
                <button className="text-black hover:text-blue-700 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  PROJECTS
                  <ChevronDownIcon />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <DropdownLink to="/projects?type=current" text="CURRENT PROJECTS" />
                  <DropdownLink to="/projects?type=executed" text="EXECUTED PROJECTS" />
                </div>
              </div>

              <NavLink to="/qhse" text="QHSE" />
              <NavLink to="/careers" text="CAREERS" />
              <NavLink to="/contact" text="CONTACT" />
            </div>

            {/* Search and Login for desktop */}
            <div className="hidden lg:flex lg:items-center">
              <div className="relative flex items-center">
                {isSearchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center transition-all duration-300">
                    <SearchInput 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <SearchButton />
                  </form>
                ) : (
                  <button onClick={toggleSearch} className="p-2 text-black hover:text-blue-700">
                    <SearchIcon />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile search and menu buttons */}
            <div className="flex items-center lg:hidden space-x-2">
              <button onClick={toggleSearch} className="p-2 text-black hover:text-blue-700">
                <SearchIcon />
              </button>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none"
              >
                <MenuIcon isOpen={isMenuOpen} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="lg:hidden px-4 py-2 bg-gray-800">
            <form onSubmit={handleSearch} className="flex items-center">
              <SearchInput 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                mobile
              />
              <SearchButton mobile />
            </form>
          </div>
        )}

        {/* Mobile Menu - Modified to take 1/4 width from right */}
        {isMenuOpen && (
          <div className="lg:hidden fixed right-0 top-16 w-1/3 h-full bg-[#cac0c8] shadow-lg z-40">
            <div className="px-2 pt-2 pb-3 space-y-0">
              <MobileNavLink to="/" text="HOME" onClick={toggleMenu} />
              <MobileNavLink to="/aboutus" text="ABOUT US" onClick={toggleMenu} />
              <MobileNavLink to="/services" text="SERVICES" onClick={toggleMenu} />
              <MobileNavLink to="/resources" text="RESOURCES" onClick={toggleMenu} />
              
              <div>
                <button
                  onClick={toggleMenu}
                  className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium text-black hover:text-blue-700 rounded"
                >
                  PROJECTS
                  <ChevronDownIcon />
                </button>
                <div className="pl-4">
                  <MobileNavLink 
                    to="/projects?type=current" 
                    text="CURRENT PROJECTS" 
                    onClick={toggleMenu}
                    subItem
                  />
                  <MobileNavLink 
                    to="/projects?type=executed" 
                    text="EXECUTED PROJECTS" 
                    onClick={toggleMenu}
                    subItem
                  />
                </div>
              </div>

              <MobileNavLink to="/qhse" text="QHSE" onClick={toggleMenu} />
              <MobileNavLink to="/careers" text="CAREERS" onClick={toggleMenu} />
              <MobileNavLink to="/contact" text="CONTACT" onClick={toggleMenu} />
              
              <div className="pt-4 pb-2 border-t border-gray-400">
                <button 
                  className="w-full px-3 py-1.5 text-sm bg-sky-600 text-white rounded hover:bg-sky-700 mb-2"
                  onClick={() => {
                    navigate("/employee-login");
                    toggleMenu();
                  }}
                >
                  EMPLOYEE LOGIN
                </button>
                <button 
                  className="w-full px-3 py-1.5 text-sm bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  onClick={() => {
                    navigate("/company-profile");
                    toggleMenu();
                  }}
                >
                  COMPANY PROFILE
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

// Reusable Components
const NavLink = ({ to, text }) => (
  <a
    href={to}
    className="text-black hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors"
  >
    {text}
  </a>
);

const DropdownLink = ({ to, text }) => (
  <a
    href={to}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  >
    {text}
  </a>
);

const MobileNavLink = ({ to, text, onClick, subItem = false }) => (
  <a
    href={to}
    className={`block px-3 py-2 ${subItem ? 'text-xs' : 'text-sm'} font-medium text-black hover:text-blue-700 rounded`}
    onClick={onClick}
  >
    {text}
  </a>
);

const SearchInput = ({ value, onChange, mobile = false }) => (
  <input
    type="text"
    placeholder="Search..."
    className={`${mobile ? 'flex-1' : 'w-48'} px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500`}
    style={{
      borderColor: "#f4cb4b",
      color: "white",
      backgroundColor: "#4a5568",
      borderWidth: "1px",
      borderStyle: "solid"
    }}
    value={value}
    onChange={onChange}
    autoFocus
  />
);

const SearchButton = ({ mobile = false }) => (
  <button
    type="submit"
    className={`${mobile ? 'px-4' : 'p-2'} py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700`}
    style={{ backgroundColor: "#1e4a7a" }}
  >
    <SearchIcon />
  </button>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    className="ml-1 h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const MenuIcon = ({ isOpen }) => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
    />
  </svg>
);

export default Navbar;