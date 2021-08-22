import AppBar from '@material-ui/core/AppBar';
import { compose } from 'redux';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import I18n from '../I18n/I18n';
import SimpleMenu from './components/simpleMenu';
import styles from './styles';
import SimpleTabs from './components/simpleTabs';
import Footer from './components/footer';

const Layout = ({ classes, children, theme }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <div className={classes.root}>
            {isMobile ? <SimpleMenu /> : <SimpleTabs />}

            {children}
            <Footer />
        </div>
    );
};

export default compose(
    withStyles(styles),
    withTheme,
)(Layout);