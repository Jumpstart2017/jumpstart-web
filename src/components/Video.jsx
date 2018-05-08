import React, { Component } from 'react';
import './Video.css';
import ReactDOM from 'react-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Navigation from './navigation.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router';


const style= {
  paper : {
    marginLeft:20,
    marginRight:20, 
    minHeight: '90%',
  },
  font: {
    "font-family": "Lao-Sangam"
  }, 
  p: {
    "maxWidth": "200px",
    "font-family": "Lao-Sangam"
  }
}

const cardMediaStyle = {
}

var videos = [
  {
    "title": "Kickstarter3 - Sources",
    "description": "Welcome to Office Hours",
    "url": "https://player.vimeo.com/video/87812378",
    "category": "Research"
  },
  {
    "title": "Significance",
    "description": "Sources",
    "url": "https://player.vimeo.com/video/103401988",
    "category": "Revision",
    "length": "1 minute"
  },
  {
    "title": "Significance",
    "description": "Talk 5 min, what will it make s think about differently? Why do you care?",
    "url": "https://player.vimeo.com/video/118858500",
    "category": "Research"
  },
  {
    "title": "JS_3",
    "description": "JS_3",
    "url": "https://player.vimeo.com/video/138325858",
    "category": "Writing",
    "length": "7 minutes"
  },
  {
    "title": "Engaging Sources",
    "description": "Engage your sources",
    "url": "https://player.vimeo.com/video/114695683",
    "category": "Research"
  },
  {
    "title": "Making Connections",
    "description": "Making Connections",
    "url": "https://player.vimeo.com/video/118733653",
    "category": "Research"
  },
  {
    "title": "Asking Questions",
    "description": "Ask questions, brain storm questions 2min, freewrite answers to one Q 5min",
    "url": "https://player.vimeo.com/video/118858498",
    "category": "Research"
  }

]

function getCards(videos, panelTitle) {
  var i = 0; 
  return videos.map(function(vid) {
    if (vid.category == panelTitle) {
      return (   
        <Grid container spacing={16} >
          <Card item="true" xs={16} sm={4}>
            <CardMedia>
              <div className="video-container">
                <iframe src={vid.url} height="250" frameBorder="0" webkitallowfullscreen="true" mozallowullscreen="true" allowFullScreen="true"></iframe>
              </div>
            </CardMedia>
            <CardContent>
              <Typography variant="headline" component="h2" style={style.font}>
              {vid.title}
              </Typography>
              <Typography component="p" style={style.p}>
                {vid.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        );
    }
    i=i+1; 
  });
};

function returnHeader() {
  return (
    <div id="header">
    <Typography variant="title" color="inherit" style={style.font}>
      <h1>Browse our videos</h1>
      <h3>Get Started. Get Unstuck. Get Motivated</h3>
    </Typography>
  </div>
  );
}

class Video extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: '',
      videos: {}
    }
  }


    render() {
      return (
        <div id="container">
          <Grid container>
              <Grid item xs={12}>
              <Navigation></Navigation>
                <Paper style={ style.paper } zdepth={2} >
                    {returnHeader()}
                    <div className="video-envelope">
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography style={style.font} className="research-panel">Research</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          {getCards(videos, "Research")}
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className="writing-panel"  style={style.font}>Writing</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        {getCards(videos, "Writing")}
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className="revision-panel"  style={style.font}>Revision</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          {getCards(videos, "Revision")}
                        </ExpansionPanelDetails>
                      </ExpansionPanel>

                  </div>
                </Paper>
                </Grid>
          </Grid>
        </div>
      );
    }
  }
  
  export default Video