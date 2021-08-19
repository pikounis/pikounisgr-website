/* eslint-disable */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import I18n from '../../components/I18n/I18n';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import map from '../../assets/map.png';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import fishbg from '../../assets/fishbg.png';
import SimpleMenu from './components/SimpleMenu/SimpleMenu';
// import { spacing } from '@material-ui/system';



const Contact = ({ classes }) => (
    <Container className={classes.container}>
        <Typography variant="h2" className={classes.title}>
            <I18n t="contact" />
        </Typography>
        <div className={classes.phoneDiv}>
            <IconButton
                href="tel:+302108011311"
                target="_blank"
            >
                <PhoneIcon/>
            </IconButton>
            <Typography>
                {/*<I18n t="" />*/}
                +30 210 8011 311
            </Typography>
        </div>
        <div className={classes.phoneDiv}>
            <IconButton
                href="mailto:info@pikounis.gr"
                target="_blank"
            >
                <EmailIcon/>
            </IconButton>
            <Typography>
                {/*<I18n t="" />*/}
                info@pikounis.gr
            </Typography>
        </div>
        <div className={classes.phoneDiv}>
            <SimpleMenu />
            <Typography>
                <I18n t="address" />
            </Typography>
        </div>
        <div className={classes.phoneDiv}>
            {/*<AccessTimeIcon />*/}
            <Typography>
                <I18n t="timeOpen" />
            </Typography>
        </div>
        <div className={classes.spacer} />
    </Container>
);

export default withStyles(styles)(Contact);
