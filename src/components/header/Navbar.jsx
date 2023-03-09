import React from "react";
import "./Navbar.css";
import { AiFillHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillChatTextFill } from "react-icons/bs";

import { motion } from "framer-motion";

function Navbar() {
  const variant = {
    hover: {
      y: -1.5,
      scale: 1.2,
      opacity: [1, 0, 1],
    },
  };

  return (
    <nav className="navbar position-sticky bg-dark bg-opacity-75 bg-gradient p-1 fs-3 container-fluid d-flex align-irems-center justify-content-center gap-5">
      <motion.div variants={variant} whileHover="hover">
        <a href="#connect">
          <BsFillChatTextFill />
        </a>
      </motion.div>
      <motion.div variants={variant} whileHover="hover">
        <a href="#">
          <AiFillHome />
        </a>
      </motion.div>
      <motion.div variants={variant} whileHover="hover">
        <a href="#contact">
          <FaUserAlt />
        </a>
      </motion.div>
    </nav>
  );
}

export default Navbar;
