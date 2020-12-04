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
        image: imgBucketBudget,
        imageAlt: "Bucket Budget Homepage"
    },
    {
        image: imgCovidCity,
        imageAlt: "Covid City Limits Homepage"
    },
    {
        image: imgWeatherDash,
        imageAlt: "Weather Dashboard Homepage"
    },
    {
        image: imgWorkScheduler,
        imageAlt: "Workday Scheduler Homepage"
    },
    {
        image: imgCodeRefactor,
        imageAlt: "Code Refactor Homepage"
    }
];

const Portfolio = () => {

    console.log(projects[0].image);

    return (
        <section className="portfolio-page">
            Portfolio

            {projects.map((project, index) => {
                return <ProjectPreview
                    key={index}
                    imageSrc={project.image}
                    imageAltText={project.imageAlt}
                />
            })}

        </section>
    );
}

export default Portfolio;