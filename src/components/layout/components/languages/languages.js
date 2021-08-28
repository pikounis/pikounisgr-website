import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import greece from 'assets/flags/greece.svg';
import uk from 'assets/flags/uk.svg';
import spain from 'assets/flags/spain.svg';
import france from 'assets/flags/france.svg';
import arabic from 'assets/flags/arabic.svg';
import { changeRoute } from 'models/ui';
import RefLink from 'components/i18nLink';
import styles from './styles';

function Languages({ classes }) {
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
                className={classes.language}
            >
                <LanguageIcon />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem
                    component={RefLink}
                    to="/"
                    onClick={() => {
                        changeRoute('/');
                        handleClose();
                    }}
                >
                    <img
                        src={greece}
                        className={classes.flagsLogo}
                        alt="Google Maps"
                    />
                    Ελληνικά
                </MenuItem>
                <MenuItem
                    component={RefLink}
                    to="/"
                    onClick={() => {
                        changeRoute('/');
                        handleClose();
                    }}
                >
                    <img
                        src={uk}
                        className={classes.flagsLogo}
                        alt="Waze"
                    />
                    English
                </MenuItem>
                <MenuItem
                    component={RefLink}
                    to="/"
                    onClick={() => {
                        changeRoute('/');
                        handleClose();
                    }}
                >
                    <img
                        src={spain}
                        className={classes.flagsLogo}
                        alt="Waze"
                    />
                    Español
                </MenuItem>
                <MenuItem
                    component={RefLink}
                    to="/"
                    onClick={() => {
                        changeRoute('/');
                        handleClose();
                    }}
                >
                    <img
                        src={france}
                        className={classes.flagsLogo}
                        alt="Waze"
                    />
                    Français
                </MenuItem>
                <MenuItem
                    component={RefLink}
                    to="/en"
                    onClick={() => {
                        changeRoute('/');
                        handleClose();
                    }}
                >
                    <img
                        src={arabic}
                        className={classes.flagsLogo}
                        alt="Waze"
                    />
                    العربية
                </MenuItem>
            </Menu>
        </div>
    );
}

export default withStyles(styles)(Languages);
