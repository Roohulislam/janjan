import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import s1Logo from "../../assets/logos/favicon_io/l5.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");
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

    if (isLanguageOpen) {
      setIsLanguageOpen(false);
    }
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);

    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsLanguageOpen(false);

    // Here you can add logic to change the app's language
    // For example: i18n.changeLanguage(lang.toLowerCase())
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-opacity-90" : ""
      }`}
      style={{ backgroundColor: "#cac0c8" }}
    >
      {/* =====================================================
          TOP COMPANY HEADER
          ===================================================== */}
      <div className="hidden lg:flex items-center justify-between px-3 xl:px-5 2xl:px-8 py-0">
        {/* Logo + Company Name */}
        <div className="flex items-center space-x-2 min-w-0">
          <div className="h-16 flex items-center flex-shrink-0">
            <img
              src={s1Logo}
              alt="Company Logo"
              className="h-40 pt-12 w-auto object-contain"
            />
          </div>

          <div className="text-black min-w-0">
            <h1 className="text-lg xl:text-xl 2xl:text-xl font-bold whitespace-nowrap">
              Saudi Build Construction
            </h1>

            <p className="text-xs xl:text-sm whitespace-nowrap">
              سعودي بيلد للإنشاءات
            </p>
          </div>
        </div>

        {/* Top Right Buttons */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <button
            className="
              px-2.5
              xl:px-3
              py-1.5
              text-xs
              xl:text-sm
              bg-sky-600
              text-white
              rounded
              hover:bg-sky-700
              transition
              whitespace-nowrap
            "
            style={{ backgroundColor: "#1e4a7a" }}
            onClick={() => navigate("/employee-login")}
          >
            EMPLOYEE LOGIN
          </button>

          <button
            className="
              px-2.5
              xl:px-3
              py-1.5
              text-xs
              xl:text-sm
              bg-gray-200
              text-gray-800
              rounded
              hover:bg-gray-300
              transition
              whitespace-nowrap
            "
            onClick={() => navigate("/company-profile")}
          >
            COMPANY PROFILE
          </button>
        </div>
      </div>

      {/* =====================================================
          MAIN NAVIGATION
          ===================================================== */}
      <nav>
        <div
          className="
            w-full
            max-w-[1600px]
            mx-auto
            px-3
            sm:px-4
            lg:px-5
            xl:px-6
            2xl:px-8
          "
        >
          <div className="flex justify-between h-16 min-w-0">
            {/* =================================================
                MOBILE LOGO AND HEADING
                Kept unchanged
                ================================================= */}
            <div className="flex items-center lg:hidden">
              <img
                src={s1Logo}
                alt="Company Logo"
                className="h-12 sm:h-10 object-contain"
              />

              <div className="text-black ml-2">
                <h1 className="text-xs sm:text-sm font-medium">
                  Saudi Build Construction
                </h1>

                <p className="text-[10px] sm:text-xs">
                  سعودي بيلد للإنشاءات
                </p>
              </div>
            </div>

            {/* =================================================
                DESKTOP NAVIGATION
                RESPONSIVE
                ================================================= */}
            <div className="hidden lg:flex lg:items-center flex-1 min-w-0">
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-full
                  min-w-0
                  gap-0.5
                  xl:gap-1
                  2xl:gap-2
                  whitespace-nowrap
                "
              >
                <NavLink to="/" text="HOME" />

                <NavLink
                  to="/aboutus"
                  text="ABOUT US"
                />

                <NavLink
                  to="/services"
                  text="SERVICES"
                />

                <NavLink
                  to="/resources"
                  text="EQUIPMENTS GALLERY"
                />

                {/* =============================================
                    PROJECTS DROPDOWN
                    ============================================= */}
                <div className="relative group flex-shrink-0">
                  <button
                    className="
                      text-black
                      hover:text-blue-700
                      px-1.5
                      xl:px-2
                      2xl:px-3
                      py-2
                      text-[11px]
                      xl:text-xs
                      2xl:text-sm
                      font-medium
                      flex
                      items-center
                      transition-colors
                      whitespace-nowrap
                    "
                  >
                    PROJECTS

                    <ChevronDownIcon />
                  </button>

                  <div
                    className="
                      absolute
                      left-0
                      mt-2
                      w-48
                      bg-white
                      rounded-md
                      shadow-lg
                      py-1
                      z-50
                      opacity-0
                      invisible
                      group-hover:opacity-100
                      group-hover:visible
                      transition-all
                      duration-300
                    "
                  >
                    <DropdownLink
                      to="/projects?type=current"
                      text="CURRENT PROJECTS"
                    />

                    <DropdownLink
                      to="/projects?type=executed"
                      text="EXECUTED PROJECTS"
                    />
                  </div>
                </div>

                <NavLink
                  to="/qhse"
                  text="QHSE"
                />

                <NavLink
                  to="/careers"
                  text="CAREERS"
                />

                <NavLink
                  to="/contact"
                  text="CONTACT"
                />
              </div>
            </div>

            {/* =================================================
                LANGUAGE SWITCHER FOR DESKTOP
                RESPONSIVE
                ================================================= */}
            <div className="hidden lg:flex lg:items-center flex-shrink-0 ml-1 xl:ml-2">
              <div className="relative">
                <button
                  onClick={toggleLanguage}
                  className="
                    flex
                    items-center
                    space-x-1
                    px-1.5
                    xl:px-2
                    py-2
                    text-[11px]
                    xl:text-xs
                    2xl:text-sm
                    font-medium
                    text-black
                    hover:text-blue-700
                    transition-colors
                    whitespace-nowrap
                  "
                >
                  <GlobeIcon />

                  <span>{currentLanguage}</span>
                </button>

                {isLanguageOpen && (
                  <div
                    className="
                      absolute
                      right-0
                      mt-2
                      w-40
                      bg-white
                      rounded-lg
                      shadow-lg
                      py-1
                      z-50
                      border
                      border-gray-200
                    "
                  >
                    <button
                      onClick={() => changeLanguage("EN")}
                      className={`flex items-center w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                        currentLanguage === "EN"
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="mr-3">
                        🇬🇧
                      </span>

                      <span>English</span>

                      {currentLanguage === "EN" && (
                        <span className="ml-auto">
                          <CheckIcon />
                        </span>
                      )}
                    </button>

                    <button
                      onClick={() => changeLanguage("AR")}
                      className={`flex items-center w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                        currentLanguage === "AR"
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="mr-3">
                        🇸🇦
                      </span>

                      <span>العربية</span>

                      {currentLanguage === "AR" && (
                        <span className="ml-auto">
                          <CheckIcon />
                        </span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* =================================================
                MOBILE MENU BUTTONS
                Kept unchanged
                ================================================= */}
            <div className="flex items-center lg:hidden space-x-2">
              {/* Language Button for Mobile */}
              <div className="relative">
                <button
                  onClick={toggleLanguage}
                  className="p-2 text-black hover:text-blue-700"
                >
                  <GlobeIcon />
                </button>

                {isLanguageOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
                    <button
                      onClick={() => changeLanguage("EN")}
                      className={`flex items-center w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                        currentLanguage === "EN"
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="mr-3">
                        🇬🇧
                      </span>

                      <span>English</span>

                      {currentLanguage === "EN" && (
                        <span className="ml-auto">
                          <CheckIcon />
                        </span>
                      )}
                    </button>

                    <button
                      onClick={() => changeLanguage("AR")}
                      className={`flex items-center w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors ${
                        currentLanguage === "AR"
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="mr-3">
                        🇸🇦
                      </span>

                      <span>العربية</span>

                      {currentLanguage === "AR" && (
                        <span className="ml-auto">
                          <CheckIcon />
                        </span>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 focus:outline-none"
              >
                <MenuIcon isOpen={isMenuOpen} />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
            Kept unchanged
            ===================================================== */}
        {isMenuOpen && (
          <div className="lg:hidden fixed right-0 top-16 w-1/3 h-full bg-[#cac0c8] shadow-lg z-40">
            <div className="px-2 pt-2 pb-3 space-y-0">
              <MobileNavLink
                to="/"
                text="HOME"
                onClick={toggleMenu}
              />

              <MobileNavLink
                to="/aboutus"
                text="ABOUT US"
                onClick={toggleMenu}
              />

              <MobileNavLink
                to="/services"
                text="SERVICES"
                onClick={toggleMenu}
              />

              <MobileNavLink
                to="/resources"
                text="RESOURCES"
                onClick={toggleMenu}
              />

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

              <MobileNavLink
                to="/qhse"
                text="QHSE"
                onClick={toggleMenu}
              />

              <MobileNavLink
                to="/careers"
                text="CAREERS"
                onClick={toggleMenu}
              />

              <MobileNavLink
                to="/contact"
                text="CONTACT"
                onClick={toggleMenu}
              />

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

/* =========================================================
   REUSABLE COMPONENTS
   ========================================================= */

const NavLink = ({ to, text }) => (
  <a
    href={to}
    className="
      text-black
      hover:text-blue-700
      px-1.5
      xl:px-2
      2xl:px-3
      py-2
      text-[11px]
      xl:text-xs
      2xl:text-sm
      font-medium
      transition-colors
      whitespace-nowrap
      flex-shrink-0
    "
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

const MobileNavLink = ({
  to,
  text,
  onClick,
  subItem = false,
}) => (
  <a
    href={to}
    className={`block px-3 py-2 ${
      subItem ? "text-xs" : "text-sm"
    } font-medium text-black hover:text-blue-700 rounded`}
    onClick={onClick}
  >
    {text}
  </a>
);

/* =========================================================
   GLOBE ICON
   ========================================================= */

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/* =========================================================
   CHECK ICON
   ========================================================= */

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-blue-700"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

/* =========================================================
   CHEVRON ICON
   ========================================================= */

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

/* =========================================================
   MENU ICON
   ========================================================= */

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
      d={
        isOpen
          ? "M6 18L18 6M6 6l12 12"
          : "M4 6h16M4 12h16M4 18h16"
      }
    />
  </svg>
);

export default Navbar;