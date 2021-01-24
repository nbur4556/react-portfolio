import React from 'react';
import './style.css';

// Components
import TextBox from '../../../components/TextBox';

// Images
import imageMain from '../../../assets/images/project-main-surveasy.png';
import imageTakeSurvey from '../../../assets/images/project-secondary-surveasy-takesurvey.JPG';
import imageAnalytics from '../../../assets/images/project-secondary-surveasy-analytics.JPG';
import imageSignin from '../../../assets/images/project-secondary-surveasy-signin.JPG';

const SurveasyCaseStudy = () => {
    return (
        <section className='casestudy-page'>
            {/* Main Image */}
            <img className="centered-image" src={imageMain} alt="SurvEasy landing page." />

            {/* Main Description */}
            <TextBox className="centered-textbox">
                <p>
                    SurvEasy makes it easy to know what your target market is thinking. The application provides
                    a simple solution for creating and providing surveys to your intended audience. This project
                    is built with a React client, and Node JS for the server. In creating SurvEasy, I was able
                    to provide a secure and full featured user authorization process involving encrypted passwords,
                    and JSON web tokens for authentication. Users can create and provide surveys with a dedicated
                    link, and data and analytics from the surveys are provided using Chart.js to display on the
                    front end.
                </p>

                <p>
                    This project was created in recognition of the need for simple and accessible surveys throughout
                    all aspects of business. You'll find these surveys in marketing, research, development, customer
                    satisfaction, and much more. With SurvEasy, companies can have a survey up and running in minutes,
                    and see analytics and results right away.
                </p>
            </TextBox>

            {/* Taking a survey image */}
            <img className="large-element" src={imageTakeSurvey} alt="Display for taking a SurvEasy survey." />

            {/* Technologies Used */}
            <TextBox className="small-element">
                <ul>
                    <li>React</li>
                    <li>Sass</li>
                    <li>Chart.js</li>
                    <li>Node JS</li>
                    <li>Express JS</li>
                    <li>Mongoose</li>
                    <li>JWT</li>
                </ul>
            </TextBox>

            {/* Taking a survey */}
            <TextBox className="centered-textbox">
                <p>
                    Providing a survey is simple. You are given a direct link to your survey that you can send to your
                    clients or customer base. When navigating to the link, they will be presented with easy an easy to
                    navigate survey form. Answers are recorded and accurately saved.
                </p>
            </TextBox>

            {/* Graphs, charts and analytics image */}
            <img className="small-element" src={imageAnalytics} alt="Graphs and charts for survey results." />

            {/* Graphs, charts and analytics */}
            <TextBox className="large-element">
                <p>
                    It is important to accurately represent the survey results to SurvEasy users. Chart.js was used to
                    display bar graphs and pie charts. From here, the user can easily compare and study answers from their
                    survey.
                </p>
            </TextBox>

            {/* Project security and validation */}
            <TextBox className="large-element">
                <p>
                    Security was given high priority. When creating a SurvEasy account, you can be sure that your credentials
                    are securely encrypted. We do not store your password in plain text. Any access to data from the account
                    is authorized using JSON Web Tokens (JWT). This ensures that the only person accessing your data is you.
                </p>
            </TextBox>

            {/* Project security and validation image */}
            <img className="small-element" src={imageSignin} alt="Surveasy sign in form." />

            {/* Going Forward */}
            <TextBox className="centered-textbox">
                <p>
                    There are a few major features that will be included in the future of SurvEasy development. First, we want
                    to expand the types of questions available to include in our surveys. While simple 'select one' type questions
                    are the main type of question seen in a business survey, we also want to provide questions that can provide
                    more detail and information. We also want to provide additional ways of sharing surveys with a users customer
                    base. This will include options to send surveys through email, or sharing with social media. There are also
                    plans to incorporate a public API accessible to our users. This would let anyone get access to survey data,
                    and provide surveys in any way they choose.
                </p>
            </TextBox>
        </section>
    )
}

export default SurveasyCaseStudy;