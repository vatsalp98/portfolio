import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 445,
    background: "rgba(0,0,0,0.5)",
    margin: '20px',
    padding: '10px',
  },
  media: {
    height: 140,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: "1.2rem",
    color: "#ddd",
  }
});

export default function ProjectCard({ place }) {
  const classes = useStyles();
  return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={place.imageUrl}
                title={place.imageDesc}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
                    {place.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
                    {place.desc}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Code
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
        </Card>
  );
}