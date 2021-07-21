import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import I18n from '../../components/I18n/I18n';
import SimpleMenu from './components/simpleMenu';
import styles from './styles';
import SimpleTabs from './components/simpleTabs';

const ButtonAppBar = ({ classes, children }) => (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
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
                <SimpleTabs/>
                <SimpleMenu/>
            </AppBar>
            {children}
        </div>
    );

export default withStyles(styles)(ButtonAppBar);
