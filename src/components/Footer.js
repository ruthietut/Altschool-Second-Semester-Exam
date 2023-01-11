import "./Footer.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +234-90-5303-0471
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <a href="https://ruthifeobasi1@gmail.com">
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                ruthifeobasi1@gmail.com
              </a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I am a software engineer with a goal to provide solutions and solve
            problems
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/ruth-obasi">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://twitter.com/RuthieObasi">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/ruth-obasi">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
