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
    const projects = [
        {
            title: "Bucket Budget",
            description: "Bucket Budget is a project built with a group of four, which allows a user to plan and budget for a trip or vacation. My role in the group was the head for backend development, so I was in charge of creating the server, and creating an api that worked with Triposo and our own back end database. The project had a need to remember user information in order to save and load their trips. For this, I was able to integrate Google's sign in API. This was chosen to remove the liability of saving passwords, while still giving our users all the benefits of having an account and saving information to our database.",
            image: imgBucketBudget,
            imageAlt: "Bucket Budget Homepage"
        },
        {
            title: "Covid City Limits",
            description: "Covid City Limits was a project where a user could create their own dream music festival. As part of a group of five, we created a webpage that utilized both the Youtube and Bands in Town APIs so that users would be able to create their own online music festival. Features include creating a festival poster from a list of headliners and artists, creating a playlist of music videos, and viewing an artists current concerts and events.",
            image: imgCovidCity,
            imageAlt: "Covid City Limits Homepage"
        },
        {
            title: "Weather Dashboard",
            description: "The Weather Dashboard uses Open Weather API to display data on current weather and five day forecast for a given location. The application takes advantage of local storage to save a history of searched cities, which allows for easily selecting a previous searched city.",
            image: imgWeatherDash,
            imageAlt: "Weather Dashboard Homepage"
        },
        {
            title: "Workday Scheduler",
            description: "The workday scheduler application can be used to store tasks throughout the day. The UI updates in real time, and takes advantage of local storage to save the users schedule to their device. Moment JS is used to incorporate dates and times.",
            image: imgWorkScheduler,
            imageAlt: "Workday Scheduler Homepage"
        },
        {
            title: "Code Refactor",
            description: "In the code refactor project, I took an existing web site and made it accessible. To achieve this, first I used semantic HTML to make sure it could be crawled and parsed by a variety of browsers. I made sure each image had an alt attribute, and finally I tweaked the colors to better support low vision and color blindness.",
            image: imgCodeRefactor,
            imageAlt: "Code Refactor Homepage"
        }
    ];

    return (
        <section className="portfolio-page projects">
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