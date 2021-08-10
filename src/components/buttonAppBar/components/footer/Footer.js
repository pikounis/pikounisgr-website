import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import styles from './styles';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
// import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import CallIcon from '@material-ui/icons/Call';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
// import MenuIcon from '@material-ui/icons/Menu';

const Footer = ({ classes }) => (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
                <Grid className={classes.container} container justify="space-around" >
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} className={classes.item}>
                        <Typography>© 2000 - {moment().format('YYYY')} Pikounis, All Rights Reserved</Typography>
                    </Grid>
                    <Grid item className={classes.ItemsAtCenter}>
                        <IconButton href="https://www.facebook.com/Pikounis-112467636890824/?hc_ref=ART0t1_dIxd6KaoN3pgnluoVuonRPIPwS6rXu0F3grjOfgD-obWlp2_YZLqeeTW4NF0&fref=nf&__xts__[0]=68.ARC-9pZH9mpmt_MIhq4DhjnhuZkppaBPMw0wnjpIgOQAuXhG0RVbFZ060IaRwcHwz9VwzZ0F6DWSG7SOmo952rrHVxNqu1ITGdWxbY3ZnF_-BNQdNcaFQ_DgTtMfffgNgtWlmq8hfc9AzRHBBygPq3Bsq8FuxVlpOoXxXWtZFD0NTxuKzXafqQ-nhr23dMyyJ-Lj5F3x8aKI73IdMAeAfRBQOIcY5arJvQRnGjs7h073X7FHbI8d2XEqFdDCrnEP2t4KP7kzKPI3yQimR79upZ0meaQtqVPtNk9kwwjAkY8ywxMnLfM&__tn__=kC-R/" target="_blank" >
                            <FacebookIcon />
                        </IconButton>
                        <IconButton href="tel:+302108011311">
                            <CallIcon />
                        </IconButton>
                        <IconButton href="mailto:info@pikounis.gr" target="_blank" >
                            <ChatIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
);

export default withStyles(styles)(Footer);
