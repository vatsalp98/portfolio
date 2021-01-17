import React from 'react';
import {makeStyles, AppBar, Container, Toolbar, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {

    },
    appBar: {
        minHeight: '100vh',
        textAlign: 'center',
        
    },
    centerIt: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <AppBar classname={classes.appBar} position="static" color="#000">
            <Container maxWidth="md">
                <Toolbar>
                    <span className={classes.centerIt}>© 2020 Vatsal Parmar</span>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Footer
