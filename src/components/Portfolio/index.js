import React, { useState } from "react";
import Nav from "../Navigation";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";
import Resume from "../Resume";

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Projects") {
            return <Projects />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
        return <About />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>{renderPage()}</main>
        </div>
    );
}