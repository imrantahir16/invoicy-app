import React from "react";
import Header from "../Header/Header";
import NavBar from "../navbar/NavBar";

const defaultClasses = "z-0 transform duration-200 lg:flex-grow pt-20 ";

const AppContainer = (props) => {
  return (
    <div className="app-wrapper relative min-h-screen lg:flex-grow">
      <Header />
      <NavBar />
      <div className={`${defaultClasses} pl-72 ease-in`}>
        <div className="container mx-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default AppContainer;
