import React, {Component} from 'react';
import { render } from 'react-dom';
import {Router, browserHistory, Route} from 'react-router';
import Landing from './components/Landing.jsx';
import Video from './components/Video.jsx';
import Login from './components/Login.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import Projects from './components/Projects.jsx'
import Project from './components/Project.jsx'

class Home extends Component {
  render() {
    return(<h1>Hello</h1>);
  }

}

render(
  <Router history={browserHistory}>
    <Route path="/" component={Landing}/>
    <Route path="/videos" component={Video}/>
    <Route path="/login" component={Login}/>
    <Route path="/create" component={CreateAccount}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/project/:id" component={Project}/>
  </Router>,
  document.getElementById('root')
);
