import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react'
import Header from './components/Header';
import Projects from './components/Projects';
import ParticlesBg from 'particles-bg';
import Footer from './components/Footer'

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh',
        //backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }
}));

export default function App() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <CssBaseline/>
        <Header/>
        <Projects/>
        <ParticlesBg type="random" bg={true} />
        <Footer/>
    </div>
  );
}


