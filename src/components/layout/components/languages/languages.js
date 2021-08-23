import React from 'react';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles';
import greece from '../../../../assets/flags/greece.svg';
import uk from '../../../../assets/flags/uk.svg';
import spain from '../../../../assets/flags/spain.svg';
import france from '../../../../assets/flags/france.svg';
import arabic from '../../../../assets/flags/arabic.svg';

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
                    onClick={handleClose}
                    component="a"
                    href="/"
                >
                    <img
                        src={greece}
                        className={classes.flagsLogo}
                        alt="Google Maps"
                    />
                    Ελληνικά
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="/en"
                >
                    <img
                        src={uk}
                        className={classes.flagsLogo}
                        alt="Waze"
                    />
                    English
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="/es"
                >
                    <img
                        src={spain}
                        className={classes.flagsLogo}
                        alt="Waze"
                    />
                    Español
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="/fr"
                >
                    <img
                        src={france}
                        className={classes.flagsLogo}
                        alt="Waze"
                    />
                    Français
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="/ar"
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
