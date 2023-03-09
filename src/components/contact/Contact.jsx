import React from "react";
import { BsArrowBarRight, BsFillTelephonePlusFill } from "react-icons/bs";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { motion } from "framer-motion";

import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const variant = {
    initial: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delayChildren: 0.1,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };
  const child_variant = {
    initial: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pfakwc7",
        "template_s2fjpqc",
        form.current,
        "XGMz9NGcdZS96Ho8k"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <motion.section
        id="connect"
        variants={variant}
        whileInView="visible"
        initial="initial"
        style={{ marginTop: "10rem" }}
        className="container bg-dark opacity-75 p-5 rounded"
      >
        <motion.h2 variants={child_variant} className="mb-5">
          Send Message <BsArrowBarRight />
        </motion.h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form d-flex gap-2 flex-column"
        >
          <motion.label variants={child_variant} for="email">
            Enter your email:
          </motion.label>
          <motion.input
            variants={child_variant}
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="email"
          />
          <motion.label variants={child_variant} for="message">
            Enter your message:
          </motion.label>
          <motion.textarea
            variants={child_variant}
            type="message"
            className="form-control"
            id="message"
            name="message"
            placeholder="your message"
          />
          <a href="">
            <motion.button
              variants={child_variant}
              type="submit"
              className="btn btn-outline-light w-25 mt-5"
            >
              send
            </motion.button>
          </a>
        </form>
      </motion.section>

      <section
        id="contact"
        style={{ marginTop: "10rem" }}
        className="container bg-dark opacity-75 p-5 rounded"
      >
        <motion.h2
          whileInView={{ opacity: [1, 0, 1] }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-5"
        >
          Contact Me <BsArrowBarRight />
        </motion.h2>
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-evenly gap-5">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="d-flex flex-column align-items-center"
          >
            <h5>Mohamad Nazeer</h5>
            <p>Division Manager</p>
            <p>M : 33548710</p>
            <p>33779489</p>
          </motion.div>
          <div className="fs-1  d-md-flex flex-sm-column">
            <RxDividerVertical />
            <RxDividerVertical />
            <RxDividerVertical />
            <RxDividerVertical />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="d-flex flex-column"
          >
            <p>
              <a href="https://goo.gl/maps/EvkPqREESUhyxv7e7">
                <MdLocationPin /> PO Box : 13240 | Doha-Qatar
              </a>
            </p>
            <p>
              <a href="tel:+97444601417">
                <BsFillTelephonePlusFill /> +974 4460 1417
              </a>
            </p>
            <p>
              <a href="mailto:naz@ayoninternational.com">
                <MdEmail /> naz@ayoninternational.com
              </a>
            </p>
            <p>
              &nbsp;
              <a href="mailto:info@ayoninternational.com">
                - info@ayoninternational.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
