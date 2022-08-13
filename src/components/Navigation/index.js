import React from "react";

const styles = {
    navStyle: {
        fontSize: "40px",
        FontFaceSet: "Montserrat",
        padding: "40px",
        margin: "25px",
        fontWeight: 500,
        listStyle: "none",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    listStyle: {
        flexDirection: "row",
        display: "inline-block",
        paddingLeft: "30px"
    }
};

function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs" style={styles.navStyle}>
            <li className="nav-item" style={styles.listStyle}>
                <a href="#about" onClick={() => handlePageChange("About")} className={currentPage === "About" ? 'nav-link active' : 'nav-link'}>
                    About
                </a>
            </li>

            <li>
                <a href="#work" onClick={() => handlePageChange("Projects")} className={currentPage === "Projects" ? 'nav-link active' : 'nav-link'}>
                    Work
                </a>
            </li>

            <li>
                <a href="#contact" onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
            <li>
                <a href="#resume" onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? 'nav-link active' : 'nav-link'}>
                    Resume
                </a>
            </li>
        </ul>
    );
}

export default Navigation;