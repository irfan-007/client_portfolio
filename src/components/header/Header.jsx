import React from "react";
import Navbar from "./Navbar";
import Me from "../../assets/Me.png";
import "./Header.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";

function Header() {
  return (
    <div style={{ marginBottom: "8rem" }}>
      <div>
        <Navbar />
      </div>

      <motion.div
        initial={{ opacity: 0, x: -120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="mt-5 gap-2  justify-content-center d-flex flex-wrap flex-md-nowrap container bg-dark bg-opacity-75 rounded p-3"
      >
        <img
          src={Me}
          className="me_img  img-thumbnail rounded bg-transparent border-0  "
          alt="..."
        />
        <div className="mx-4">
          <RiDoubleQuotesL className="fs-2" />
          <i className="fs-5">
            &nbsp;&nbsp;<i className="fs-3">Hello,I am Nazeer</i> <br />I am
            working in Ayon Internatinal as the DIVISION MANAGER. AYON
            International, one of the outstanding and sophisticated cleaning
            services company based out of Doha-Qatar offering the best of
            services practice options available in today's highly competitive
            market. We can satisfy the quality aspects of projects as we strive
            to provide high quality cleaning services on a competitive price in
            this competitive market place. &nbsp;&nbsp;
          </i>
          <RiDoubleQuotesR className="fs-2" />
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
