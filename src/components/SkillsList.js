import React from 'react'

const skills = ['js', 'react', 'angular', 'redux', 'redux-saga']

export default function SkillsList() {
    return (
        <div>
            {skills.map(skill => <img height="60px" src={`https://www.anychart.com/_design/img/upload/plugins/nodejs-logo.png`} alt={`${skill} logo`} />)}
        </div>
    )
}
