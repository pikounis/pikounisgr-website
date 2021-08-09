import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import { changeRoute } from 'models/ui';
import I18n from '../../../I18n/I18n';

function TabPanel(props) {
    const {
        children, value, index, ...other
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab
                        label={<I18n t="home" />}
                        component={Link}
                        to="/"
                        onClick={() => {
                            changeRoute('/');
                            handleClose();
                        }}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label={<I18n t="ourFish" />}
                        component={Link}
                        to="/our-fish"
                        onClick={() => {
                            changeRoute('/our-fish');
                            handleClose();
                        }}
                        {...a11yProps(1)}
                    />
                    <Tab
                        label={<I18n t="gallery" />}
                        component={Link}
                        to="/gallery"
                        onClick={() => {
                            changeRoute('/gallery');
                            handleClose();
                        }}
                        {...a11yProps(2)}
                    />
                    <Tab
                        label={<I18n t="awards" />}
                        component={Link}
                        to="/awards"
                        onClick={() => {
                            changeRoute('/awards');
                            handleClose();
                        }}
                        {...a11yProps(4)}
                    />
                    <Tab
                        label={<I18n t="contact" />}
                        component={Link}
                        to="/contact"
                        onClick={() => {
                            changeRoute('/contact');
                            handleClose();
                        }}
                        {...a11yProps(5)}
                    />
                </Tabs>
            </AppBar>
        </div>
    );
}
