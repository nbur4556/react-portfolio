import React from 'react';

// Components
import ProjectPreview from '../components/ProjectPreview.js';

// Assets
import imgSurvEasy from '../assets/images/project-main-surveasy.png';
import imgSurvEasyCompressed from '../assets/images/project-main-surveasy.avif';
import imgBucketBudget from '../assets/images/project-main-bucket-budget.jpg';
import imgBucketBudgetCompressed from '../assets/images/project-main-bucket-budget.avif';
import imgCovidCity from '../assets/images/project-main-covid-city-limits.png';
import imgCovidCityCompressed from '../assets/images/project-main-covid-city-limits.avif';
import imgWeatherDash from '../assets/images/project-main-weather-dashboard.png';
import imgWeatherDashCompressed from '../assets/images/project-main-weather-dashboard.avif';

const Portfolio = () => {
    const projects = [
        {
            title: "Dev Issue Tracker",
            description: "Dev issue tracker is a resource for organizing bugs, issues, and features on development projects.",
            technologies: ["React", "Sass", "NodeJS", "Express", "Mongoose", "JWT"],
            imageCompressed: null,
            imageAlt: null,
            deployLink: 'https://devissuetracking.herokuapp.com/',
            repoLink: 'https://github.com/nbur4556/issue_reporter'
        },
        {
            title: "SurvEasy",
            description: "SurvEasy makes it easy to know what your target market is thinking. The application provides a simple solution for creating and providing surveys to your intended audience. This project is built with a React client, and Node JS for the server. In creating SurvEasy, I was able to provide a secure and full featured user authorization process involving encrypted passwords, and JSON web tokens for authentication. Users can create and provide surveys with a dedicated link, and data and analytics from the surveys are provided using Chart.js to display on the front end.",
            technologies: ["React", "Sass", "NodeJS", "Express", "Mongoose", "JWT", "Chart.js", "Axios", "Bootstrap"],
            image: imgSurvEasy,
            imageCompressed: imgSurvEasyCompressed,
            imageAlt: "SurvEasy Homepage",
            deployLink: 'https://surveasy.herokuapp.com',
            repoLink: 'https://github.com/Sakiskid/Surveasy'
        },
        {
            title: "Bucket Budget",
            description: "Bucket Budget is a project built with a group of four, which allows a user to plan and budget for a trip or vacation. My role in the group was the head for backend development, so I was in charge of creating the server, and creating an api that worked with Triposo and our own back end database. The project had a need to remember user information in order to save and load their trips. For this, I was able to integrate Google's sign in API. This was chosen to remove the liability of saving passwords, while still giving our users all the benefits of having an account and saving information to our database.",
            technologies: ["HTML5", "CSS3", "Javascript", "NodeJS", "Express", "jQuery", "Bootstrap", "MySQL", "Sequelize"],
            image: imgBucketBudget,
            imageCompressed: imgBucketBudgetCompressed,
            imageAlt: "Bucket Budget Homepage",
            deployLink: "https://bucketbudgetplanner.herokuapp.com/",
            repoLink: "https://github.com/msyatlaus/bucket-budget"
        },
        {
            title: "Covid City Limits",
            description: "Covid City Limits was a project where a user could create their own dream music festival. As part of a group of five, we created a webpage that utilized both the Youtube and Bands in Town APIs so that users would be able to create their own online music festival. Features include creating a festival poster from a list of headliners and artists, creating a playlist of music videos, and viewing an artists current concerts and events.",
            technologies: ["HTML5", "CSS3", "Javascript", "jQuery", "Tailwind"],
            image: imgCovidCity,
            imageCompressed: imgCovidCityCompressed,
            imageAlt: "Covid City Limits Homepage",
            deployLink: "https://nbur4556.github.io/dream-festival-lineup/",
            repoLink: "https://github.com/nbur4556/dream-festival-lineup"
        },
        {
            title: "Weather Dashboard",
            description: "The Weather Dashboard uses Open Weather API to display data on current weather and five day forecast for a given location. The application takes advantage of local storage to save a history of searched cities, which allows for easily selecting a previous searched city.",
            technologies: ["HTML5", "CSS3", "Javascript", "jQuery", "Bootstrap", "MomentJS"],
            image: imgWeatherDash,
            imageCompressed: imgWeatherDashCompressed,
            imageAlt: "Weather Dashboard Homepage",
            deployLink: "https://nbur4556.github.io/weather-dashboard/",
            repoLink: "https://github.com/nbur4556/weather-dashboard"
        }
    ];

    return (
        <section className="portfolio-page projects">
            {projects.map((project, index) => {
                return <ProjectPreview
                    key={index}
                    projectTitle={project.title}
                    projectDescription={project.description}
                    projectTechnologies={project.technologies}
                    imageSrc={project.image}
                    imageSrcCompressed={project.imageCompressed}
                    imageAltText={project.imageAlt}
                    deployLink={project.deployLink}
                    repoLink={project.repoLink}
                    caseStudyRoute={project.caseStudyRoute}
                />
            })}
        </section>
    );
}

export default Portfolio;