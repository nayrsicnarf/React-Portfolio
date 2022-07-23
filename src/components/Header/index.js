/* eslint-disable no-unused-vars */
import React from "react";
import Selfie from "../../assets/images/Francis-Selfie.jpeg";
import Nav from "../Navigation";
import { currentPage, handlePageChange } from "../Portfolio";

function Header(currentPage, handlePageChange) {
    return (
        <div>
            <header>
                <div className="headerDiv">
                    <h1>Francis Ryan Aguinaldo</h1>
                </div>
            </header>
            <section id="subheader">
                <img className="selfie" alt="author selfie" src={Selfie} />
            </section>
        </div>
    );
}

export default Header;