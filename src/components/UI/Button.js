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
      "cursor-pointer rounded-xl font-title text-white flex flex-row items-center justify-center focus:outline-none focus:ring shadow-sm";

    if (block) {
      defaultClasses += " block w-full focus:ring-blue-400";
    } else {
      defaultClasses += " inline-flex w-full my-1 sm:ml-3 sm:w-auto sm:text-sm";
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
          " border border-slate-400 text-slate-600 focus:ring-slate-600 ";
      } else if (danger) {
        defaultClasses +=
          " border border-rose-400 text-rose-500 focus:ring-rose-500 ";
      }
    } else {
      if (success) {
        defaultClasses += " bg-green-500 focus:ring-green-600";
      } else if (secondary) {
        defaultClasses += " bg-slate-400 focus:ring-slate-500";
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
        scale: size === "small" ? 1.02 : 1.03,
        transition: {
          type: "spring",
          damping: 15,
          duration: 0.1,
        },
      }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
