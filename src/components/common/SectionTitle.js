import React, { useMemo } from "react";
const defaultClasses = "primary-self-text text-lg font-title";
const SectionTitle = (props) => {
  const { children, className } = props;

  const classes = useMemo(() => {
    if (className) {
      defaultClasses + " " + className;
    }
    return defaultClasses;
  }, [className]);
  return <div className={classes}>{children}</div>;
};

export default SectionTitle;
