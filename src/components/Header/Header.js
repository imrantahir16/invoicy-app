import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../../context/AppContext";
const Header = () => {
  const { toggleNavBar, showNavBar } = useAppContext();
  const classes = useMemo(() => {
    if (showNavBar) {
      return "pl-72";
    }
    return "pl-3";
  }, [showNavBar]);

  return (
    <header
      className={`z-12 fixed z-10 flex w-full items-center border-b border-slate-50 bg-white pr-3 transition-all ${classes}`}
    >
      <motion.button
        className="rounded-md p-4 focus:outline-none"
        initial={{
          translateX: 0,
        }}
        animate={{
          color: showNavBar ? "#777" : "#0066FF",
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
          className="h-6 w-6"
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
              opacity: 0,
            }}
            animate={{
              translateX: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              damping: 20,
            }}
          >
            Invoicy
          </motion.div>
        )}
      </div>

      <button className="h-8 w-8 pr-12">
        <FontAwesomeIcon className="h-8 w-8" icon={faSun} />
      </button>
    </header>
  );
};

export default Header;
