import React, { Component } from 'react';
import Button from 'material-ui/Button';
import AppBar  from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

class Navigation extends Component {
    render() {
        var styles = {
            buttonStyle: {
                backgroundColor: 'transparent',
                color: '#3fa7d6',
                display: 'block'
            },
            barStyle: {
                color: '#3fa7d6',
                flex:1
            }

        };

        return(
            <div style={styles.barStyle}>
                <AppBar style={styles.barStyle} position="static" color="#FFFFFF">
                    <Toolbar>
                    <img src={require("../assets/JumpstartLogoThick_Blue.png")} alt="Jumpstart Logo" height="50" width="50"/>
                        <Typography variant="title" color="inherit">
                            JUMPSTART
                        </Typography>
                            <Button href="./" style={styles.buttonStyle}>HOME</Button>
                            <Button href="./projects" style={styles.buttonStyle}>PROJECTS</Button>
                            <Button href="./videos" style={styles.buttonStyle}>VIDEO</Button>
                    </Toolbar>
                </AppBar>
            </div>

        );

    }
}
export default Navigation