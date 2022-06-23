import React from "react";
import Header from "../Header/Header";
import NavBar from "../navbar/NavBar";
import { useAppContext } from "../../context/AppContext";

const defaultClasses = "z-0 transform duration-200 lg:flex-grow pt-20 ";

const AppContainer = (props) => {
  const { showNavBar, escapeOverflow } = useAppContext();
  return (
    <div
      className={`relative min-h-screen lg:flex-grow ${
        escapeOverflow ? "" : "app-wrapper"
      }`}
    >
      <Header />
      <NavBar />
      <div className={`${defaultClasses} ${showNavBar ? "pl-72 ease-in" : ""}`}>
        <div
          className={`container mx-auto ${
            showNavBar
              ? "origin-top scale-50 ease-in sm:origin-center sm:scale-100"
              : ""
          }`}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AppContainer;
