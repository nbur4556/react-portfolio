import React from 'react';

// Components
import ProjectPreview from '../components/ProjectPreview.js';

// Assets
import imgBucketBudget from '../assets/images/project-main-bucket-budget.jpg';
import imgCovidCity from '../assets/images/project-main-covid-city-limits.png';
import imgWeatherDash from '../assets/images/project-main-weather-dashboard.png';
import imgWorkScheduler from '../assets/images/project-main-work-scheduler.png';
import imgCodeRefactor from '../assets/images/project-main-code-refactor.jpg';

const Portfolio = () => {
    return (
        <section class="portfolio-page">
            Portfolio

            <ProjectPreview
                imageSrc={imgBucketBudget}
                imageAltText="Bucket Budget Homepage"
            />
            <ProjectPreview
                imageSrc={imgCovidCity}
                imageAltText="Covid City Limits Homepage"
            />
            <ProjectPreview
                imageSrc={imgWeatherDash}
                imageAltText="Weather Dashboard Homepage"
            />
            <ProjectPreview
                imageSrc={imgWorkScheduler}
                imageAltText="Workday Scheduler Homepage"
            />
            <ProjectPreview
                imageSrc={imgCodeRefactor}
                imageAltText="Code Refactor Homepage"
            />
        </section>
    );
}

export default Portfolio;