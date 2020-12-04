import React from 'react';

const ProjectPreview = props => {
    return (
        <section>
            <h1>{props.projectTitle}</h1>
            <p>{props.projectDescription}</p>
            <img src={props.imageSrc} alt={props.imageAltText} />
        </section>
    )
}

export default ProjectPreview;