import React, { useCallback, useMemo } from "react";
import { useAppContext } from "../../context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouseChimney,
  faFileLines,
  faUserPlus,
  faStore,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import InvoicyIcon from "../InvoicyIcon/InvoicyIcon";
import Skeleton from "react-loading-skeleton";
import CompanyWidget from "../company/CompanyWidget";

const NAV_DATA = [
  {
    title: "Dashboard",
    link: "/",
    icon: faHouseChimney,
  },
  {
    title: "Invoices",
    link: "invoices",
    icon: faFileLines,
  },
  {
    title: "Clients",
    link: "clients",
    icon: faUserPlus,
  },
  {
    title: "Products",
    link: "products",
    icon: faStore,
  },
];

const navDefaultClasses =
  "fixed inset-0 duration-200 transform lg:opacity-100 z-10 w-72 bg-white h-screen p-3 border border-r-1";

const navItemDefaultClasses = "block px-4 py-2 rounded-md flex flex-1";

const NavBar = () => {
  const { showNavBar, toggleNavBar } = useAppContext();
  const { pathname } = useLocation();

  const navBarClickHandler = useCallback(() => {
    const width = window.innerWidth;
    if (width <= 767 && showNavBar) {
      toggleNavBar();
    }
  }, [showNavBar, toggleNavBar]);

  const aboutRoute = useMemo(() => pathname === "/about", [pathname]);

  return (
    <nav
      className={
        showNavBar
          ? `${navDefaultClasses} translate-x-0 ease-in`
          : `${navDefaultClasses} -translate-x-full ease-out`
      }
    >
      <div className="flex">
        <motion.span
          className="flex items-center justify-center p-2 font-title text-2xl font-bold"
          initial={{ translateX: -300 }}
          animate={{
            translateX: showNavBar ? 0 : -300,
            color: "rgb(0,102, 255)",
          }}
          transition={{
            type: "spring",
            damping: 18,
          }}
        >
          {/* <span> */}
          <InvoicyIcon loop className="nav-loading" />
          {/* </span> */}
          Invoicy
        </motion.span>
      </div>
      <CompanyWidget />

      <ul className="mt-4">
        {NAV_DATA.map(({ title, link, icon }) => {
          return (
            <li key={title} className="mb-2 ">
              <NavLink
                to={link}
                className={"side-link rounded-md"}
                onClick={navBarClickHandler}
              >
                {({ isActive }) => (
                  <motion.span
                    key={`${title}_nav_item`}
                    className={
                      isActive
                        ? `${navItemDefaultClasses} primary-self-text`
                        : `${navItemDefaultClasses} text-default-color `
                    }
                    whileHover={{
                      color: "rgb(0, 102, 255)",
                      backgroundColor: "rgba(0, 102, 255, 0.1)",
                      translateX: isActive ? 0 : 4,
                      transition: {
                        backgroundColor: {
                          type: "spring",
                          damping: 18,
                        },
                      },
                    }}
                    whileTap={{
                      scale: isActive ? 1.02 : 0.9,
                    }}
                  >
                    <FontAwesomeIcon className="mr-4 h-6 w-6" icon={icon} />
                    {title}
                  </motion.span>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <hr />
      <div className="my-4">
        <NavLink to="about">
          <motion.span
            className="text-default-color hover:text-shadow flex rounded-md px-4 py-2"
            style={{ color: aboutRoute ? "rgb(14, 136, 14)" : "#777" }}
            whileHover={{
              scale: [1.03, 1, 1.03, 1, 1.03, 1, 1.03, 1],
              color: "rgb(14, 136, 14)",
              textShadow: "0px 0px 3px #85ff66",
              transition: {
                type: "spring",
                damping: 18,
              },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon className="mr-4 h-6 w-6" icon={faCircleInfo} />
            About Me
          </motion.span>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
