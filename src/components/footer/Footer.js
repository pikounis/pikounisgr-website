/* eslint-disable */

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import apblack from './apblack.png';
import styles from './styles';
import 'react-vertical-timeline-component/style.min.css';
import moment from 'moment';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from 'react';


const Footer = ({ classes }) => (
    <Grid className={classes.container} container justify="space-around" >
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.item}>
            <img src={apblack} className={classes.imgSize} />
        </Grid>
        <Grid item className={classes.ItemsAtCenter}>
            <IconButton href="https://github.com/pikounis/" target="_blank" >
                <GitHubIcon/>
            </IconButton>
            <IconButton href="mailto:anastasiospikounis@gmail.com">
                <AlternateEmailIcon/>
            </IconButton>
            <IconButton href="https://linkedin.com/in/pikounis" target="_blank" >
                <LinkedInIcon/>
            </IconButton>
        </Grid>
    </Grid>
);

export default withStyles(styles)(Footer);

