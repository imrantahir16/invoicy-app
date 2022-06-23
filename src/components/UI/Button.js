import React from "react";
import { useMemo } from "react";
import { motion } from "framer-motion";

const Button = (props) => {
  const {
    children,
    size = "",
    block = false,
    outlined = false,
    success = false,
    secondary = false,
    danger = false,
    type = "button",
  } = props;

  const buttonClasses = useMemo(() => {
    let defaultClasses =
      "cursor-pointer rounded-xl font-title text-white flex flex-row items-center justify-center focus:outline-none focus:ring ";

    if (block) {
      defaultClasses += " block w-full focus:ring-blue-400";
    }

    if (size === "small") {
      defaultClasses += " text-sm h-8 px-2 ";
    } else {
      defaultClasses += " h-12 px-4 ";
    }

    if (outlined) {
      if (success) {
        defaultClasses +=
          " border border-green-500 text-green-600 focus:ring-green-600 ";
      } else if (secondary) {
        defaultClasses +=
          " border border-gray-400 text-gray-600 focus:ring-gray-600 ";
      } else if (danger) {
        defaultClasses +=
          " border border-red-400 text-red-500 focus:ring-red-500 ";
      }
    } else {
      if (success) {
        defaultClasses += " bg-green-500 focus:ring-green-600";
      } else if (secondary) {
        defaultClasses += " bg-gray-400 focus:ring-gray-500";
      } else if (danger) {
        defaultClasses += " bg-red-500 focus:ring-red-600";
      } else {
        defaultClasses += " primary-background-color";
      }
    }
    return defaultClasses;
  }, [block, size, outlined, success, secondary, danger]);
  return (
    <motion.button
      type={type}
      whileHover={{
        scale: size === "small" ? 1.02 : 1.04,
        transition: {
          type: "spring",
          damping: 15,
          duration: 0.1,
        },
      }}
      whileTap={{ scale: 0.9 }}
      className={buttonClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
