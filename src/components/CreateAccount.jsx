import React, { Component } from 'react';
import './CreateAccount.css';
import ReactDOM from 'react-dom';
import {Button} from 'material-ui/Button';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router';

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  handleChange = name => event => {
    console.log('Typed ', event.target.value)
    this.setState({
      [name]: event.target.value})
    console.log("email: ", this.email)
    console.log("password ", this.password)
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <form id="create">
            <Row>
            <TextField
                required
                id="name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              </Row>
              <Row>
              <TextField
                required
                id="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              </Row>
              <Row>
              <TextField
                required
                id="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                margin="normal"
              />
              </Row>
              <Link to="/videos"><input href="/videos" type="submit" form="create" value="Submit" /></Link>
            </form>
          </Col>
          <Col xs={12} sm={6}>
            <div className="right">
              <h1>Jumpstart Your Writing</h1>
              <h3>Create an Account</h3>
              </div>
          
            </Col>
        </Row>
      </Grid>
    );
  }
}

export default CreateAccount
