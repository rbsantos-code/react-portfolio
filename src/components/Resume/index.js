import React from 'react';
import resumeImg from '../../assets/img/resume.pdf'

function Resume() {
    return (
        <>
            <h2 className="text-center" id="resume">Resume</h2>
            <br />
            <div>
                <h3 className="resume-font">Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div>
                <h3 className="resume-font">Back-end Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySql, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
            <div className="text-center">
                <a href={resumeImg}>
                    <h5>Click here to view my full resume!</h5>
                </a>
            </div>
        </>
    )
}

export default Resume;