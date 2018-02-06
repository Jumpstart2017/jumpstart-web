import React, { Component } from 'react';
import './Landing.css';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';
import { Grid, Row, Col } from 'react-material-responsive-grid';

class Landing extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <h1>Get Started. Get Unstuck. Get Motivated</h1>
        </Row>
        <Row>
          <h1>The Time is Now</h1>
        </Row>
        <Row>
          JUMPSTART YOUR WRITING
        </Row>
        <Row>
          <Col xs4={2} lg={6}>
            <Button raised color="primary">
            Register
            </Button>
          </Col>
          <Col xs4={2} lg={6}>
            <Button raised color="primary">
            Start Now
            </Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Landing
