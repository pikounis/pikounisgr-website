/* eslint-disable */

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import I18n from '../../../I18n/I18n';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import styles from '../footer/styles';
import AppBar from '@material-ui/core/AppBar';

const InfoBar = ({ classes }) => (
    <Toolbar className={classes.bar}>
        <Grid className={classes.container} container justify="space-around">
            <Grid item className={classes.ItemsAtCenter}>
                <IconButton
                    href="tel:+302108011311"
                    target="_blank"
                >
                    <PhoneIcon/>
                </IconButton>
                <Typography variant="h6">
                    +30 210 8011 311
                </Typography>
            </Grid>
            <Grid item className={classes.ItemsAtCenter}>
                <IconButton
                    href="https://goo.gl/maps/LoCPQQCewioNfxKx8"
                    target="_blank"
                >
                    <LocationOnIcon/>
                </IconButton>
                <Typography variant="h6">
                    <I18n t="address"/>
                </Typography>
            </Grid>
        </Grid>
    </Toolbar>
);

export default withStyles(styles)(InfoBar);
