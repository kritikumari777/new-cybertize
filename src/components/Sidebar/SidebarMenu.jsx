import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const SidebarMenu = ({ route, isOpen, setIsOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsMenuOpen(false);
    }
  }, [isOpen]);
  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="menu_item">
          <div className="icon">{route.icon}</div>
          <AnimatePresence>
            {isOpen && (
              <div
                // variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="link_text"
              >
                {route.name}
              </div>
            )}
          </AnimatePresence>
        </div>
        {isOpen && (
          <div
          >
            <FaAngleDown />
          </div>
        )}
      </div>{" "}
      <AnimatePresence>
        {isMenuOpen && (
          <div
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menu_container"
          >
            {route.subRoutes.map((subRoute, i) => (
              <div key={i} custom={i}>
                <NavLink to={subRoute.path} className="link">
                  <div className="icon">{subRoute.icon}</div>
                  <div className="link_text">{subRoute.name}</div>
                </NavLink>
              </div>
            ))}
          </div>
        )}{" "}
      </AnimatePresence>
    </>
  );
};

export default SidebarMenu;
