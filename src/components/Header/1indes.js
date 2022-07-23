import React from "react";
import Headshot from "../../assets/images/headshot.jpg";
import Nav from "../Navigation";
import { currentPage, handlePageChange } from "../Portfolio";

function Header(currentPage, handlePageChange) {
  return (
    <div>
      <header>
        <div className="headerDiv">
          <h1>Elizabeth Larson</h1>
        </div>
      </header>
      <section id="subheader">
        <img className="headshot" alt="author headshot" src={Headshot} />
      </section>
    </div>
  );
}

export default Header;