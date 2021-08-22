import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { changeRoute } from 'models/ui';
import I18n from '../../../I18n/I18n';
import { withProps } from 'libraries/components';
import { tabIndex } from 'models/ui';
import styles from './styles';
import pikounisLogo from 'assets/logo1112.png';
import MenuItem from '@material-ui/core/MenuItem';

function TabPanel(props) {
    const {
        children,
        value,
        index,
        ...other
    } = props;

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const SimpleTabs = ({
    classes,
    tabIndex,
    changeRoute,
}) => {
    const handleChange = (event, newValue) => {
        changeRoute(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                aria-label="simple tabs example"
                className={classes.theTabs}
                centered
            >
                <Tab
                    label={<I18n t="home" />}
                    {...a11yProps(0)}
                    component={Link}
                    to="/"
                    onClick={() => changeRoute('/')}
                />
                <Tab
                    label={<I18n t="whoWeAre" />}
                    {...a11yProps(1)}
                    component={Link}
                    to="/who-we-are"
                    onClick={() => changeRoute('/who-we-are')}
                />
                <Tab
                    label={<I18n t="gallery" />}
                    {...a11yProps(2)}
                    component={Link}
                    to="/gallery"
                    onClick={() => changeRoute('/gallery')}
                />
                <Tab
                    label={<I18n t="awards" />}
                    {...a11yProps(3)}
                    component={Link}
                    to="/awards"
                    onClick={() => changeRoute('/awards')}
                />
                <Tab
                    label={<I18n t="contact" />}
                    {...a11yProps(4)}
                    component={Link}
                    to="/contact"
                    onClick={() => changeRoute('/contact')}
                />
            </Tabs>
        </div>
    );
};

export default compose(
    withStyles(styles),
    withProps({
        tabIndex,
        changeRoute,
    }),
)(SimpleTabs);
