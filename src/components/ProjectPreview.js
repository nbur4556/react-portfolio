import React from 'react';

const ProjectPreview = props => {
    return (
        <section>
            ProjectPreview

            <img src={props.imageSrc} alt={props.imageAltText} />
        </section>
    )
}

export default ProjectPreview;