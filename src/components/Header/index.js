import React from "react";
import Selfie from "../../assets/images/Francis-Selfie.jpeg";
import Navigation from "../Navigation";
import { currentPage, handlePageChange } from "../Portfolio";

function Header(currentPage, handlePageChange) {
    return (
        <div>

            <header>
                hello mars
                <div className="headerDiv" style={{ outline: "solid black 2px" }}>

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