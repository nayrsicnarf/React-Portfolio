import React from "react";

function Navigation({ currentPage, handlePageChange }) {
    return (
        <nav>
            <ul>

                <li>
                    <a href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About"}>
                        About
                    </a>
                </li>

                <li>
                    <a href="#work" onClick={() => handlePageChange("Projects")} className={currentPage === "Projects"}>
                        Work
                    </a>
                </li>

                <li>
                    <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact"}>
                        Contact
                    </a>
                </li>
                <li>
                    <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume"}>
                        Resume
                    </a>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;