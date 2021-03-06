import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../context/AppContext";
import InvoicyIcon from "../LottieIcons/InvoicyIcon";
import useDarkMode from "../../hooks/useDarkMode";
const Header = () => {
  const { toggleNavBar, showNavBar } = useAppContext();
  const [darkMode, setDarkMode] = useDarkMode();
  const classes = useMemo(() => {
    if (showNavBar) {
      return "pl-72";
    }
    return "pl-3";
  }, [showNavBar]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <header
      className={`z-12 fixed z-10 flex w-full items-center border-slate-50 bg-white pr-3 transition-all dark:bg-slate-900 ${classes} shadow-md`}
    >
      <motion.button
        className="ml-1 rounded-full p-2 focus:outline-none dark:text-sky-100 md:ml-2 md:focus:ring md:focus:ring-blue-400"
        initial={{
          translateX: 0,
        }}
        animate={{
          color: darkMode
            ? "rgb(224,242,254)"
            : showNavBar
            ? "#777"
            : "#0066FF",
          rotate: showNavBar ? "360deg" : "0deg",
        }}
        transition={{
          type: "spring",
          damping: 25,
        }}
        onClick={toggleNavBar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={showNavBar ? "M15 19l-7-7 7-7" : "M4 6h16M4 12h16M4 18h7"}
          />
        </svg>
      </motion.button>
      <div className="relative block flex-1 items-center justify-center p-4 text-2xl font-bold sm:text-3xl">
        {showNavBar && <>&nbsp;</>}
        {!showNavBar && (
          <motion.div
            className="relative flex flex-row items-center justify-center px-2 font-title text-2xl font-bold"
            initial={{
              translateX: "10vw",
              opacity: 0.5,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
              color: darkMode ? "rgb(224,242,254)" : "rgb(0, 102, 255)",
            }}
            transition={{
              type: "spring",
              damping: 20,
            }}
          >
            Invoicy
            <InvoicyIcon loop className="nav-loading-right" />
          </motion.div>
        )}
      </div>

      <motion.button
        className="mr-1 rounded-full p-2 focus:outline-none dark:text-sky-100 md:mr-12 md:focus:ring md:focus:ring-blue-400"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        initial={{ rotate: 0 }}
        animate={{
          rotate: darkMode ? "360deg" : "360deg",
        }}
      >
        <FontAwesomeIcon
          className="h-6 w-6 text-blue-500 dark:text-sky-100"
          icon={darkMode ? faSun : faMoon}
          // color={"#0066FF"}
        />
      </motion.button>
    </header>
  );
};

export default Header;
