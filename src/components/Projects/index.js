import React from "react";
import github from "../../assets/icons/icons8-github-30.png";
import wishlistkeeper from "../../assets/images/wishlistkeeper.png";
import randomrecipe from "../../assets/images/rrg-main.png";
import notetaker from "../../assets/images/Note-Taker-main.png";
import ecommerce from "../../assets/images/ecommerce-category-all.png";
import textEdit from "../../assets/images/te-demo.png";

export default function Work() {
  return (
    <div>
      <h1>My Projects</h1>
      <div className="projects">

        {/* Wish List Keeper */}
        <section className="projectImg" alt="" src={wishlistkeeper}>
          <h3 href="https://aefzs-wishlistkeeper.herokuapp.com/"
            target="_blank">
            Wish List Keeper
          </h3>
          <a href="https://github.com/elarso2/StoreWishList.git"
            target="_blank" rel="noreferrer">
            <img src={github} alt="github icon" />
          </a>
        </section>

        {/* Random Recipe Generator */}
        <section className="projectImg" alt="" src={randomrecipe}>
          <h3 href="https://bongomin256.github.io/Random-Recipe-Generator/" target="_blank">
            Random Recipe Generator
          </h3>
          <a href="https://github.com/bongomin256/Random-Recipe-Generator.git" target="_blank" rel="noreferrer">
            <img src={github} alt="github icon" />
          </a>
        </section>

        {/* Note Taker */}
        <section className="projectImg" alt="" src={notetaker}>
          <h3
            href="https://infinite-lake-69578.herokuapp.com/" target="_blank">
            Note Taker
          </h3>
          <a href="https://github.com/elarso2/Password-Generator" target="_blank" rel="noreferrer">
            <img src={github} alt="github icon" />
          </a>
        </section>

        {/* E-Commerce */}
        <section>
          <img className="projectImg" alt="" src={ecommerce} />
          <h3 href="https://drive.google.com/file/d/1e8JApRfUYatK7N2bc4t37cijWjaPamMe/view"
            target="_blank">
            E-Commerce Back End Application
          </h3>
          <a href="https://github.com/nayrsicnarf/e-commerce-back-end.git"
            target="_blank" rel="noreferrer">
            <img src={github} alt="github icon" />
          </a>
        </section>

        {/* Text Editor */}
        <section className="projectImg" alt="" src={textEdit}>
          <h3 href="https://radiant-everglades-48068.herokuapp.com/" target="_blank">
            Text Editor
          </h3>
          <a href="https://github.com/nayrsicnarf/Text-Editor.git" target="_blank" rel="noreferrer">
            <img src={github} alt="github icon" />
          </a>
        </section>

      </div>
    </div>
  );
}