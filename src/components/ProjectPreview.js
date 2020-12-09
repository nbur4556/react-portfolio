import React from 'react';

// Assets
import '../stylesheets/project-preview.css';
import '../stylesheets/project-preview-responsive.css';

// Components
import TextBox from './TextBox.js';

const ProjectPreview = props => {
    return (
        <section className="project">
            <TextBox title={props.projectTitle}>
                <p>{props.projectDescription}</p>
                <div>
                    <a href={props.deployLink} target="_blank" rel="noreferrer">Website</a>
                    <a href={props.repoLink} target="_blank" rel="noreferrer">Repository</a>
                </div>
            </TextBox>

            <img src={props.imageSrc} alt={props.imageAltText} />

        </section>
    )
}

export default ProjectPreview;