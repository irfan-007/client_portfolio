import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { motion, spring } from "framer-motion";

function Footer() {
  const variant = {
    show: {
      scale: [1, 1.1, 1],
      transition: { duration: 0.6, repeat: "Infinity" },
    },
  };

  return (
    <footer
      style={{ marginTop: "10rem" }}
      className="footer bg-dark container-fluid p-4 "
    >
      <div className="d-flex gap-5 flex-column align-items-center justify-content-center flex-wrap ">
        <div>
          <h2>Nazeer</h2>
        </div>
        <div className="d-flex flex-wrap gap-5 align-items-center justify-content-center">
          <motion.h5 whileHover="show" variants={variant}>
            <a href="#connect">Connect</a>
          </motion.h5>
          <motion.h5 whileHover="show" variants={variant}>
            <a href="#">Home</a>
          </motion.h5>
          <motion.h5 whileHover="show" variants={variant}>
            <a href="#contact">Contact</a>
          </motion.h5>
        </div>
        <div className="d-flex gap-5 fs-2">
          <div>
            <a href="https://instagram.com/muhammadnazeer151?igshid=ZDdkNTZiNTM=">
              <AiOutlineInstagram />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/profile.php?id=100083770276270&mibextid=ZbWKwL">
              <AiOutlineFacebook />
            </a>
          </div>
          <div>
            <a href="https://wa.me/+919847992599">
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
