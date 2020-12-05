import React from 'react';
import '../stylesheets/project-preview.css';

const ProjectPreview = props => {
    return (
        <section className="project">
            <div>
                <h1>{props.projectTitle}</h1>
                <p>{props.projectDescription}</p>
                <a href={props.deployLink} target="_blank" rel="noreferrer">Page</a>
                <a href={props.repoLink} target="_blank" rel="noreferrer">Repository</a>
            </div>

            <img src={props.imageSrc} alt={props.imageAltText} />

        </section>
    )
}

export default ProjectPreview;