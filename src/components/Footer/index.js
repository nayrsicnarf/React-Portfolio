import React from "react";
import github from "../../assets/icons/icons8-github-30.png";
import linkedin from "../../assets/icons/icons8-linkedin-circled-30.png";
import email from "../../assets/icons/icons8-mail-30.png";
import resume from "../../assets/icons/icons8-resume-30.png";

const Footer = () => {
  return (
    <div>

      {/* GitHub */}
      <a href="https://github.com/nayrsicnarf">
        <img src={github} alt="gitbub icon" />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/fryaguinaldo/">
        <img src={linkedin} alt="linkedin icon" />
      </a>

      {/* Email */}
      <a href="mailto: fryaguinaldo@gmail.com" target="_blanck">
        <img src={email} alt="email icon" />
      </a>

      {/* Resume */}
      <a href="https://drive.google.com/file/d/1O5mleNTwKkEs69FJrzQTggQ9LPRMw2iI/view?usp=sharing">
        <img src={resume} alt="document icon" />
      </a>

    </div>
  );
};

export default Footer;