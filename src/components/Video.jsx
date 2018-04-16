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


const style= {
    marginLeft:20,
    marginRight:20, 
    minHeight: '90%',
}

const cardMediaStyle = {
}

var videos = [
  {
    "title": "Making Connections",
    "description": "Making connections",
    "url": "https://player.vimeo.com/video/118733653",
    "category": "Research",
    "length": "3 minutes"
  },
  {
    "title": "Sources",
    "description": "Sources",
    "url": "https://player.vimeo.com/video/103401988",
    "category": "Revision",
    "length": "1 minute"
  },
  {
    "title": "Asking Questions",
    "description": "Asking questions",
    "url": "https://player.vimeo.com/video/118858498",
    "category": "Research",
    "length": "10 minutes"
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
    "category": "Research",
    "length": "2 minutes"
  }
]

function getCards(videos, panelTitle) {
  var i = 0; 
  return videos.map(function(vid) {
    if (vid.category == panelTitle) {
      return (   
        <Grid container spacing={8} >
          <Card item="true" xs={12} sm={4}>
            <CardMedia>
              <div className="video-container">
                <iframe src={vid.url} width="400" height="250" frameBorder="0" webkitallowfullscreen="true" mozallowullscreen="true" allowFullScreen="true"></iframe>
              </div>
            </CardMedia>
            <CardContent>
              <Typography variant="headline" component="h2">
              {vid.title}
              </Typography>
              <Typography>{vid.length}</Typography>
              <Typography component="p">
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
    <Typography variant="title" color="inherit">
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
      uid: ''
    }
  }

    render() {
      return (
        <div id="container">
          <Grid container>
              <Grid item xs={12}>
              <Navigation></Navigation>
                <Paper style={ style } zdepth={2} >
                    {returnHeader()}
                    <div className="video-envelope">
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className="research-panel">Research</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          {getCards(videos, "Research")}
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className="writing-panel">Writing</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        {getCards(videos, "Writing")}
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className="revision-panel">Revision</Typography>
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