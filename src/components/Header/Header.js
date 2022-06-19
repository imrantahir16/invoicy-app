import React from "react";
let defaultClasses = "";
const Header = () => {
  const classes = () => {
    return defaultClasses;
  };
  return (
    <header className={classes}>
      <div>MenuIcon</div>
      <div>Invoicy</div>
      <div>SettingIcon</div>
    </header>
  );
};

export default Header;
