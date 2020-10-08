import React from 'react'

const skills = [
{
    name: 'js',
},
{
    name: 'react'
},
{
    name: 'redux'
},
{
    name: 'redux-saga'
},
{
    name: 'angular',
    height: 65,
},
{
    name: 'nodejs',
    height: 65,
},
{
    name: 'mongo',
},
{
    name: 'postman',
}
]


export default function SkillsList() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            {skills.map(skill =>
                <img
                    style={{
                        height: skill.height || 60,
                    }}
                    src={`${skill.name}-logo.png`}
                    alt={`${skill} logo`}
                />)
            }
        </div>
    )
}
