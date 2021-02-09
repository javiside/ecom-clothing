import React from "react";

import Bg from "../assets/bg.jpg";
import Pic from "../assets/pic.jpg";
import Li from "../assets/li.png";

import "../styles/pages/contact.scss";

const ContactPage = () => (
  <div
    dir="ltr"
    className="LI-badge-container-vertical-light LI-badge-container vertical light large"
  >
    <div className="LI-profile-badge-header LI-name-container">
      <div className="LI-col">
        <img className="LI-profile-pic-container" alt="background" src={Bg} />
        <img src={Pic} className="LI-profile-pic" alt="Francisco M." />
      </div>
      <div className="LI-col LI-header">
        <div className="LI-name">
          <a href="https://mx.linkedin.com/in/javiside?trk=profile-badge-name">
            Francisco M.
          </a>
        </div>
        <div className="LI-title">Software Engineer</div>
      </div>
    </div>
    <ul className="more-info">
      <li className="LI-field">
        <a href="https://www.linkedin.com/company/walmartecommerce?trk=profile-badge-company">
          Walmart eCommerce
        </a>
      </li>
      <li className="LI-field">Sonora State University</li>
    </ul>
    <div className="LI-profile-badge-footer">
      <a
        href="https://mx.linkedin.com/in/javiside?trk=profile-badge-cta"
        className="LI-view-profile"
      >
        View profile
      </a>
      <span className="LI-logo">
        <img src={Li} alt="LinkedIn" className="LI-icon" />
      </span>
    </div>
  </div>
);

export default ContactPage;

/*
 >Francisco M.</a></div>
*/
