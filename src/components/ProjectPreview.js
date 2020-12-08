import React from 'react';
import '../stylesheets/project-preview.css';

// Components
import TextBox from './TextBox.js';

const ProjectPreview = props => {
    return (
        <section className="project">
            <TextBox title={props.projectTitle}>
                <p>{props.projectDescription}</p>
                <div>
                    <a href={props.deployLink} target="_blank" rel="noreferrer">Page</a>
                    <a href={props.repoLink} target="_blank" rel="noreferrer">Repository</a>
                </div>
            </TextBox>

            <img src={props.imageSrc} alt={props.imageAltText} />

        </section>
    )
}

export default ProjectPreview;