import React, { Component } from 'react';
import './Project.css';
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
import Select from 'material-ui/Select';
import Menu, { MenuItem } from 'material-ui/Menu';

const style= {
    marginLeft:20,
    marginRight:20, 
    minHeight: '90%',
    color: '#000000'
  }


  var project = {
      "title": "Paper",
      "deadline": "2020-10-10",
      "type": 2,
      "pid": 5,
      "subprojects": [
        {
            "deadline": "2020-5-10",
            "parent": "",
            "title": "Introduction",
            "progress": 0,
            "tasks": [
                {
                    "title": "Do stuff",
                    "deadline": "2032-03-23",
                    "wordCount": 0
                }
            ],
    
        },
        {
            "deadline": "2020-7-10",
            "parent": "",
            "title": "Chapter 1",
            "progress": 0,
            "tasks": [
                {
                    "title": "Do stuff",
                    "deadline": "2032-03-23",
                    "wordCount": 0
                }
            ],
    
        }
    ]
} 

function getTasks(proj) {
    proj.tasks.map(function(proj) {
        return(
            <div id="task">
                <p>{proj.title}</p>
                <p>{proj.deadline}</p>
            </div>

        )
    })
}


class Project extends Component {
    constructor(props) {
        super(props);
        this.state= {
            open:false
        }

    }


    handleClickOpen = () => {
        this.setState({ open: true });
        console.log("clicked" + this.state.open)
    }


    showAddProject = () => {
    }

    getCards = (projects) => {
        return projects.subprojects.map(function(proj) {
          return (   
              <Grid container spacing={8} >
                <Card item="true" xs={12} sm={4}>
                  <CardHeader action={
                    <IconButton>
                      <ArrowDownIcon />
                    </IconButton>
                  } title = {proj.title}
                  />
                  <CardContent>
                    <Typography>Due: {proj.deadline}</Typography>
                    <Typography component="p">
                        
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
        });
      }

    render() {
        return (
          <div id="container project">
            <Grid container>
              <Grid item xs={12}>
                <Navigation></Navigation>
                <Paper style={ style } zdepth={2} >
                  <Row id="header">
                    <Col>
                      <h1 id="project-name">{project.title}</h1>
                      <h3 id="project-deadline">Deadline: {project.deadline}</h3>
                    </Col>
                    <br />
                  </Row>
                  <Row>
                    <IconButton   onClick={() => this.handleClickOpen()}>
                        <AddIcon />
                    </IconButton>
                     { this.showAddProject()}
                  </Row>
                  <Row id="project-cards">
                      
                      { this.getCards(project)}
                  </Row>
                </Paper>
              </Grid>
            </Grid>
            </div>
        );
      }
}

export default Project;