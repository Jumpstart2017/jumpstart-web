import React, { Component } from 'react';
import './Landing.css';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';
import AppBar  from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import Navigation from './navigation.jsx';


var buttonStyle = {
  padding: '20px 20px 20px 20px',
  color:'#FFFFFF',
  'borderRadius': '20px',
  border: "3px solid #FFFFFF",
  "fontSize": '20px',
  backgroundColor: 'transparent',


}
class Landing extends Component {
  render() {
    var styles = {
      buttonStyle: {
          backgroundColor: 'transparent',
          color: '#FFFFFF',
          display: 'block'
      },
      barStyle: {
          color: '#FFFFFF',
          flex:1,
          backgroundColor: 'transparent',
          boxShadow: 'none'
      }

  };
    return (
      <div id="container landing">
        <Grid>
          <Row>
            <div style={styles.barStyle}>
                  <AppBar style={styles.barStyle} position="static">
                      <Toolbar>
                      <img src={require("../assets/JumpstartLogoThick_White.png")} alt="Jumpstart Logo" height="50" width="50"/>
                          <Typography variant="title" color="inherit">
                              JUMPSTART
                          </Typography>
                              <Button style={styles.buttonStyle}>ABOUT</Button>
                              <Button href="./login" style={styles.buttonStyle}>LOG IN</Button>
                      </Toolbar>
                  </AppBar>
              </div>
          </Row>
          <Row>
            <Typography variant="body1" color="inherit">
              <h1 id="title">Get Started. Get Unstuck. Get Motivated</h1>
            </Typography>
          </Row>
          <Row>
              <img src={require("../assets/JumpstartLogoThick_White.png")} alt="Jumpstart Logo" height="50%" width="50%"/>
              <Typography variant="title" color="inherit"> 
                <h1>The Time is Now</h1>
              </Typography>
          </Row>
          <Row>
            <Typography variant="subheading" color="inherit">
              <h2 id="slogon">JUMPSTART YOUR WRITING</h2>
            </Typography>
          </Row>
          <Row>
            <Col xs4={2} lg={6}>
              <Button style={buttonStyle} variant="raised" color="primary">
              Register
              </Button>
            </Col>
            <Col xs4={2} lg={6}>
              <Button href="./videos" style={buttonStyle} variant="raised" color="primary">
              Start Now
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Landing
