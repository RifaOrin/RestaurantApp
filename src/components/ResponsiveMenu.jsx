import { motion, AnimatePresence } from "framer-motion";
import React from "react";

function ResponsiveMenu(props) {
  const { open } = props;
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 w-full h-screen z-100"
        >
          <div className="text-sm font-semibold uppercase bg-red text-white p-7 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-4">
              {/* Custom underline with pseudo-element */}
              {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="relative hover:after:scale-x-100 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu;
