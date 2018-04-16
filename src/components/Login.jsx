import React, { Component } from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
import {Button} from 'material-ui/Button';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      email: '',
      password: ''
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
            <form>
              <TextField
                required
                id="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange('email')}
                margin="normal"
              />
              <TextField
                required
                id="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                margin="normal"
              />
              <input type="submit" value="Submit" />
            </form>
          </Col>
          <Col xs={12} sm={6}>
            <div className="right">
              <h1>Jumpstart Your Writing</h1>
              <h3>Login</h3>
              </div>
          
            </Col>
        </Row>
      </Grid>
    );
  }
}

export default Login
