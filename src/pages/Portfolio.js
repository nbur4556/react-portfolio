import React from 'react';

// Components
import ProjectPreview from '../components/ProjectPreview.js';

// Assets
import imgBucketBudget from '../assets/images/project-main-bucket-budget.jpg';
import imgCovidCity from '../assets/images/project-main-covid-city-limits.png';
import imgWeatherDash from '../assets/images/project-main-weather-dashboard.png';
import imgWorkScheduler from '../assets/images/project-main-work-scheduler.png';
import imgCodeRefactor from '../assets/images/project-main-code-refactor.jpg';

const projects = [
    {
        title: "Bucket Budget",
        description: "description",
        image: imgBucketBudget,
        imageAlt: "Bucket Budget Homepage"
    },
    {
        title: "Covid City Limits",
        description: "description",
        image: imgCovidCity,
        imageAlt: "Covid City Limits Homepage"
    },
    {
        title: "Weather Dashboard",
        description: "description",
        image: imgWeatherDash,
        imageAlt: "Weather Dashboard Homepage"
    },
    {
        title: "Workday Scheduler",
        description: "description",
        image: imgWorkScheduler,
        imageAlt: "Workday Scheduler Homepage"
    },
    {
        title: "Code Refactor",
        description: "description",
        image: imgCodeRefactor,
        imageAlt: "Code Refactor Homepage"
    }
];

const Portfolio = () => {

    return (
        <section className="portfolio-page">
            Portfolio

            {projects.map((project, index) => {
                return <ProjectPreview
                    key={index}
                    projectTitle={project.title}
                    projectDescription={project.description}
                    imageSrc={project.image}
                    imageAltText={project.imageAlt}
                />
            })}

        </section>
    );
}

export default Portfolio;