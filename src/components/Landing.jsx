import React, { Component } from 'react';
import './Landing.css';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-material-responsive-grid';


var buttonStyle = {
  padding: '20px 20px 20px 20px',
  color:'#FFFFFF',
  'borderRadius': '20px',
  border: "3px solid #FFFFFF",
  "fontSize": '20px'


}
class Landing extends Component {
  render() {
    return (
      <div id="container">
        <Grid>
          <Row>
            <h1 id="title">Get Started. Get Unstuck. Get Motivated</h1>
          </Row>
          <Row>
              <img src={require("../assets/JumpstartLogoThick_White.png")} alt="Jumpstart Logo" height="50%" width="50%"/>
              <h1>The Time is Now</h1>
          </Row>
          <Row>
            <h2 id="slogon">JUMPSTART YOUR WRITING</h2>
          </Row>
          <Row>
            <Col xs4={2} lg={6}>

            </Col>
            <Col xs4={2} lg={6}>

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Landing
