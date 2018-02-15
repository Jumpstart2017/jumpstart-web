import React, {Component} from 'react';
import { render } from 'react-dom';
import {Router, browserHistory, Route} from 'react-router';
import Landing from './components/Landing.jsx';

class Home extends Component {
  render() {
    return(<h1>Hello</h1>);
  }

}

render(
  <Router history={browserHistory}>
    <Route path="/" component={Landing}/>
  </Router>,
  document.getElementById('root')
);
