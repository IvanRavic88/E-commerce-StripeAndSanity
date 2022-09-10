import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="footer-container">
      <p>{year} My store &copy; All right reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
