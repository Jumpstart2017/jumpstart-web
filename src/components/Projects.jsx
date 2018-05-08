import React, { Component } from 'react';
import './Projects.css';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Card, { CardHeader, CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Navigation from './navigation.jsx';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import AddIcon from '@material-ui/icons/Add';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Select from 'material-ui/Select';
import Menu, { MenuItem } from 'material-ui/Menu';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router';



const style= {
  marginLeft:20,
  marginRight:20, 
  minHeight: '90%',
  color: '#000000'
}

const h ={
  color: '#000000'
}

var projects = [
  {
    "title": "Thesis",
    "deadline": "2019-01-20",
    "type": 1,
    "pid": "5"
  },
  {
    "title": "Paper",
    "deadline": "2020-10-10",
    "type": 2,
    "pid": "6"
  }
];



class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: '',
      open: false,
      type: '',
      deadline: '',
      name: ''
    }
    this.getCards = this.getCards.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);

  };



  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
    console.log("clicked" + this.state.open)
  }

  handleClose = () => {
    this.createProject();
    this.setState({ open: false });
  }

  createProject = () => {
    var entry = {
      "title": this.state.name,
      "deadline": this.state.deadline,
      "type": this.state.type
    }
    console.log(entry)
    console.log(this.state.type)
    projects.push(entry)
  }

  displayType = (num) => {
    if(this.num == 1) {
      return "Research"
    } else if (this.num == 2) {
      return "Writing"
    } else if (this.num == 3) {
      return "Revision"
    }
  }

  getCards = (projects) => {
    return projects.map(function(proj) {
      return (   
          <Grid container spacing={8} >
            <Card item="true" xs={12} sm={3}>
              <CardHeader action={
                <IconButton>
                  <ArrowDownIcon />
                </IconButton>
              }
              />
              <CardContent>
                <Typography variant="headline" component="h2">
                {proj.title}
                </Typography>
                <Typography>{proj.deadline}</Typography>
                <Typography component="p">
                  {proj.type}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={'/project/'+ proj.pid}><Button variant="raised" size="small" >See Project</Button></Link>
              </CardActions>
            </Card>
          </Grid>
        );
    });
  }

  showAddProject = () => {
        var today = new Date();
        return(<Dialog
          open={this.state.open}
          onClose={() => this.handleClose()}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create a Project</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the following details to create a new project!
            </DialogContentText>
            <form>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Project Name"
                  type="text"
                  errortext="This field is required."
                  value={this.state.name}
                  onChange={this.handleChange('name')}                  
                  fullWidth
                />
                <TextField
                  margin="dense"
                  id="deadline"
                  label="Deadline (MM/DD/YYY)"
                  type="text"
                  value={this.state.deadline}
                  onChange={this.handleChange('deadline')}
                  fullWidth
                />
                <TextField
                  id="select-type"
                  select
                  label="Stage"
                  value={this.state.type}
                  helperText="Please select what stage is your project"
                  margin="normal"
                  fullWidth
                  onChange={this.handleChange('type')}
                >
                  <MenuItem value={1}>Research</MenuItem>
                  <MenuItem value={2}>Writing</MenuItem>
                  <MenuItem value={3}>Revision</MenuItem>
                </TextField>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.handleClose()} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
        )
  }

  render() {
    return (
      <div id="container">
        <Grid container>
          <Grid item xs={12} >
            <Navigation></Navigation>
            <Paper style={ style } zdepth={2} >
              <Row id="header">
                  <h1>Welcome</h1>
              </Row>
              <Row>
                <h1 id="project-title">Projects</h1>
                
                <IconButton   onClick={() => this.handleClickOpen()}>
                    <AddIcon />
                </IconButton>
                 { this.showAddProject()}
              </Row>
              <Row id="proj-cards">
                  
                  { this.getCards(projects)}
              </Row>
            </Paper>
          </Grid>
        </Grid>
        </div>
    );
  }
}

export default Projects
