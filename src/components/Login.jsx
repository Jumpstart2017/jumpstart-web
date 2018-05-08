import React, { Component } from 'react';
import './Login.css';
import ReactDOM from 'react-dom';
import {Button} from 'material-ui/Button';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import {auth} from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router';


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const style= {
  right : {
    marginLeft:'50px',
    marginTop:'25%'
  }
}

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

class Login extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      email: '',
      password: '',
      ...INITIAL_STATE
    }
  }

  handleChange = name => event => {
    console.log('Typed ', event.target.value)
    this.setState({
      [name]: event.target.value})
    console.log("email: ", this.email)
    console.log("password ", this.password)
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;


    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('./videos');
        this.setState(() => ({ ...INITIAL_STATE }))
        
        console.log("HELPPPP")
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }  

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={6} class="center-items">
            <form onSubmit={this.onSubmit} id="login">
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
              <Row>
              <Link to="/videos" ><button type="submit" form="login" value="Submit" >Login </button></Link>
              </Row>
            </form>
          </Col>
          <Col xs={12} sm={6}>
            <div className="right">
              <div>
              <h1 styles={style.right}>Jumpstart Your Writing</h1>
              <h3>Login</h3>
              <p>Login to access your various projects</p>
              </div>
              </div>
          
            </Col>
        </Row>
      </Grid>
    );
  }
}

export default Login
