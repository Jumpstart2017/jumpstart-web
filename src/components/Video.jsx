import React, { Component } from 'react';
import './Video.css';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import Paper from 'material-ui/Paper';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Card, { CardActions, CardContent } from 'material-ui/Card';


const style= {
    marginLeft:20,
    marginRight:20, 
    minHeight: '90%',
    minWidth: '100%',
}

class Video extends Component {
    render() {
      return (
        <div id="container">
          <Grid>
            <Row>
                <Paper style={ style } zdepth={2} >
                    <div id="header">
                        <h1>Browse our videos</h1>
                        <h3>Get Started. Get Unstuck. Get Motivated</h3>
                    </div>
                    <div className="video-envelope">
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className="research-panel">Research</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Card>
                          <CardContent>
                            <Typography variant="headline" component="h2">
                            Video 1
                            </Typography>
                            <Typography>10 minutes</Typography>
                            <Typography component="p">
                              Description of video
                            </Typography>
                          </CardContent>
                        </Card>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className="research-panel">Writing</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className="research-panel">Revision</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>

                  </div>
                </Paper>
                
            </Row>
          </Grid>
        </div>
      );
    }
  }
  
  export default Video