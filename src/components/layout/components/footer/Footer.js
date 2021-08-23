import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
// import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import CallIcon from '@material-ui/icons/Call';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import styles from './styles';
import PhoneIcon from '@material-ui/icons/Phone';
import Languages from '../languages/languages';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import I18n from '../../../I18n/I18n';
import { useLocation } from 'react-router-dom'
// import MenuIcon from '@material-ui/icons/Menu';

const Footer = ({ classes }) => (
    <div>
        <div className={classes.root1}>
            <AppBar position="static">
                <Toolbar>
                    <Grid className={classes.container} container justifyContent="space-around">
                        <Grid item xs={12} className={classes.ItemsAtCenter1}>
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
                        <Grid item xs={12} className={classes.ItemsAtCenter1}>
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
                        {/*<Grid item xs={3} className={classes.ItemsAtCenter}>*/}
                        {/*    <Typography>*/}
                        {/*        © 2000 -*/}
                        {/*        {' '}*/}
                        {/*        {moment().format('YYYY')}*/}
                        {/*        {' '}*/}
                        {/*        Pikounis,*/}
                        {/*        /!*<br/>*!/*/}
                        {/*        All Rights Reserved*/}
                        {/*    </Typography>*/}
                        {/*</Grid>*/}
                        <Grid item className={classes.ItemsAtCenter1} xs={12}>
                            <IconButton href="https://www.facebook.com/Pikounis-112467636890824/?hc_ref=ART0t1_dIxd6KaoN3pgnluoVuonRPIPwS6rXu0F3grjOfgD-obWlp2_YZLqeeTW4NF0&fref=nf&__xts__[0]=68.ARC-9pZH9mpmt_MIhq4DhjnhuZkppaBPMw0wnjpIgOQAuXhG0RVbFZ060IaRwcHwz9VwzZ0F6DWSG7SOmo952rrHVxNqu1ITGdWxbY3ZnF_-BNQdNcaFQ_DgTtMfffgNgtWlmq8hfc9AzRHBBygPq3Bsq8FuxVlpOoXxXWtZFD0NTxuKzXafqQ-nhr23dMyyJ-Lj5F3x8aKI73IdMAeAfRBQOIcY5arJvQRnGjs7h073X7FHbI8d2XEqFdDCrnEP2t4KP7kzKPI3yQimR79upZ0meaQtqVPtNk9kwwjAkY8ywxMnLfM&__tn__=kC-R/" target="_blank">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton href="mailto:info@pikounis.gr" target="_blank">
                                <ChatIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
        <div className={classes.root2}>
            <AppBar position="static">
                <Toolbar>
                    <Grid className={classes.container} container justifyContent="space-around">
                        <Grid item xs={3} className={classes.ItemsAtCenter2}>
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
                        <Grid item xs={3} className={classes.ItemsAtCenter2}>
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
                        {/*<Grid item xs={3} className={classes.ItemsAtCenter}>*/}
                        {/*    <Typography>*/}
                        {/*        © 2000 -*/}
                        {/*        {' '}*/}
                        {/*        {moment().format('YYYY')}*/}
                        {/*        {' '}*/}
                        {/*        Pikounis,*/}
                        {/*        /!*<br/>*!/*/}
                        {/*        All Rights Reserved*/}
                        {/*    </Typography>*/}
                        {/*</Grid>*/}
                        <Grid item className={classes.ItemsAtCenter2} xs={3}>
                            <IconButton href="https://www.facebook.com/Pikounis-112467636890824/?hc_ref=ART0t1_dIxd6KaoN3pgnluoVuonRPIPwS6rXu0F3grjOfgD-obWlp2_YZLqeeTW4NF0&fref=nf&__xts__[0]=68.ARC-9pZH9mpmt_MIhq4DhjnhuZkppaBPMw0wnjpIgOQAuXhG0RVbFZ060IaRwcHwz9VwzZ0F6DWSG7SOmo952rrHVxNqu1ITGdWxbY3ZnF_-BNQdNcaFQ_DgTtMfffgNgtWlmq8hfc9AzRHBBygPq3Bsq8FuxVlpOoXxXWtZFD0NTxuKzXafqQ-nhr23dMyyJ-Lj5F3x8aKI73IdMAeAfRBQOIcY5arJvQRnGjs7h073X7FHbI8d2XEqFdDCrnEP2t4KP7kzKPI3yQimR79upZ0meaQtqVPtNk9kwwjAkY8ywxMnLfM&__tn__=kC-R/" target="_blank">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                onClick={console.log(useLocation().pathname)}
                            >
                                <CallIcon />
                            </IconButton>
                            <IconButton href="mailto:info@pikounis.gr" target="_blank">
                                <ChatIcon />
                            </IconButton>
                            <Languages />

                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    </div>

);

export default withStyles(styles)(Footer);
