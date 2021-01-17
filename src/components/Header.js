import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Collapse} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SortIcon from '@material-ui/icons/Sort';
import Toolbar from '@material-ui/core/Toolbar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
        background: 'none',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    appbarWrapper: {
        width: "80%",
        margin: '0 auto',
    },
    icon:{
        color:'#fff',
        fontSize: '2rem',
    },
    colorText: {
        color: '#FF0000',
    },
    colorWhite: {
        color:'#fff',
        fontSize: '2rem',
    },
    container: {
        textAlign: 'center',
    },
    arrowExpand: {
        color: '#FF0000',
        fontSize: '2.5rem',
    },
}));

function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])
    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Vatsal <span className={classes.colorText}>Parmar</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>    
            </AppBar>
            <Collapse in={checked}
                {...(checked ? { timeout: 1000} : {})}
                collapsedHeight={25}>
                <div className={classes.container}>
                    <h1 className={classes.colorWhite}>
                        Welcome to my Interactive <br/><span className={classes.colorText}>Portfolio!</span>
                    </h1>
                    <Scroll to="projects-made" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.arrowExpand}/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>            
        </div>
    )
}

export default Header
