import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ProjectCard from './ProjectCard';
import projects from '../static/projectsData';
import LightSpeed from 'react-reveal/LightSpeed';


const useStyles = makeStyles((theme) => ({
    root: {
        minheight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.root} id='projects-made'>
            <LightSpeed right>
                <ProjectCard place={projects[0]}/>
            </LightSpeed>
            <LightSpeed left>
                <ProjectCard place={projects[1]}/> 
            </LightSpeed>
        </div>
    )
}

export default Projects

