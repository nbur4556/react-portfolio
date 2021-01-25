import React from 'react';
import { Link } from 'react-router-dom';

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
                <ul>
                    {props.projectTechnologies.map((technology, index) => {
                        return (<li key={index}>{technology}</li>)
                    })}
                </ul>
                <div>
                    <a href={props.deployLink} target="_blank" rel="noreferrer">Website</a>
                    <a href={props.repoLink} target="_blank" rel="noreferrer">Repository</a>
                    {(props.caseStudyRoute) ? <Link to={props.caseStudyRoute}>Case Study</Link> : null}
                </div>
            </TextBox>

            <img src={props.imageSrc} alt={props.imageAltText} />

        </section>
    )
}

export default ProjectPreview;