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



const style= {
  marginLeft:20,
  marginRight:20, 
  minHeight: '90%',
}

var projects = [
  {
    "title": "Thesis",
    "deadline": "2019-01-20",
    "type": 1
  },
  {
    "title": "Paper",
    "deadline": "2020-10-10",
    "type": 2
  }
];



class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uid: '',
      open: false,
      entry: {}
    }
    this.getCards = this.getCards.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);

  };

  handleClickOpen = () => {
    this.setState({ open: true });
    console.log("clicked" + this.state.open)
  }

  handleClose = () => {
    this.setState({ open: false });
  }



  getCards = (projects) => {
    return projects.map(function(proj) {
      return (   
          <Grid container spacing={8} >
            <Card item="true" xs={12} sm={4}>
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
                  {proj.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" >See Project</Button>
              </CardActions>
            </Card>
          </Grid>
        );
    });
  }

  showAddProject = () => {
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
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Project Name"
              type="email"
              errortext="This field is required."
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
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
          <Grid item xs={12}>
            <Navigation></Navigation>
            <Paper style={ style } zdepth={2} >
              <Row id="header">
                  <h1>Welcome</h1>
              </Row>
              <Row>
                <h1>Projects</h1>
                <IconButton   onClick={() => this.handleClickOpen()}>
                    <AddIcon />
                </IconButton>
                 { this.showAddProject()}
              </Row>
              <Row id="project-cards">
                  
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
