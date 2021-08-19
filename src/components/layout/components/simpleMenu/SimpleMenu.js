import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import { changeRoute } from 'models/ui';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import I18n from '../../../I18n/I18n';
import styles from './styles';

const SimpleMenu = ({ classes }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                className={classes.hamburger}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    component={Link}
                    to="/"
                    onClick={() => {
                        changeRoute('/');
                        handleClose();
                    }}
                >
                    <I18n t="home" />
                </MenuItem>
                <MenuItem
                    component={Link}
                    to="/who-we-are"
                    onClick={() => {
                        changeRoute('/who-we-are');
                        handleClose();
                    }}
                >
                    <I18n t="whoWeAre" />
                </MenuItem>
                <MenuItem
                    component={Link}
                    to="/gallery"
                    onClick={() => {
                        changeRoute('/gallery');
                        handleClose();
                    }}
                >
                    <I18n t="gallery" />
                </MenuItem>
                <MenuItem
                    component={Link}
                    to="/awards"
                    onClick={() => {
                        changeRoute('/awards');
                        handleClose();
                    }}
                >
                    <I18n t="awards" />
                </MenuItem>
                <MenuItem
                    component={Link}
                    to="/contact"
                    onClick={() => {
                        changeRoute('/contact');
                        handleClose();
                    }}
                >
                    <I18n t="contact" />
                </MenuItem>
            </Menu>
        </div>
    );
};

export default withStyles(styles)(SimpleMenu);
