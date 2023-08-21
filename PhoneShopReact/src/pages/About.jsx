import React from "react";
import { Link } from "react-router-dom";
import { ArrowFatLeft } from "phosphor-react";
import "../css/Cart.css";

function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <p className="about-paragraph">
        Welcome to our Phone Shop application! We are dedicated to providing
        high-quality phones at affordable prices. Our goal is to offer a wide
        range of phone models, colors, and features to suit your needs.
      </p>
      <p className="about-paragraph">
        With our easy-to-use interface, you can browse through our collection,
        view detailed information about each phone, and make a purchase
        securely.
      </p>
      <p className="about-paragraph">
        Feel free to explore our shop and find the perfect phone that fits your
        style and requirements. If you have any questions or need assistance,
        please do not hesitate to contact our support team.
      </p>
      <div className="continue-shopping">
        <Link to="/">
          <ArrowFatLeft width={20} height={20} />
          <span> Return Shopping</span>
        </Link>
      </div>
    </div>
  );
}

export default About;
