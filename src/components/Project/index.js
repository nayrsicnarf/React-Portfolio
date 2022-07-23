import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <p className="project-title" id="card-title">{props.name}</p>
                <p>
                    <a href={props.github}><img src="https://img.icons8.com/ios-glyphs/344/github.png" alt="Repository" id="project-icon" /></a>
                    <a href={props.deploy}><img src="https://img.icons8.com/pastel-glyph/344/laptop--v3.png" alt="Site Deployment" id="project-icon" /></a>
                </p>
                <p id="topics">
                    ({props.topics})
                </p>
            </div>
        </div>
    );
}

export default ProjectCards;