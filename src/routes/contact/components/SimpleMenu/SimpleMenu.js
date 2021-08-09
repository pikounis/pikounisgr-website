import React from 'react';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';
import styles from './styles';
import googleMaps from '../../../../assets/maps/gmaps.png';
import appleMaps from '../../../../assets/maps/apple_maps.png';
import waze from '../../../../assets/maps/waze.png';

function SimpleMenu({ classes }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <LocationOnIcon />
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
                    href="https://goo.gl/maps/ESZbueKX27zMqM3Q8"
                >
                    <img
                        src={googleMaps}
                        className={classes.mapsLogo}
                        alt="Google Maps"
                    />
                    Google Maps
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="https://maps.apple.com/?address=Dionysou%2070,%20145%2063%20Kifissia,%20Greece&ll=38.084063,23.816829&q=Dionysou%2070&_ext=EiYpNz5JYS8KQ0AxwoNdtaXPN0A5tRNvvVULQ0BBjFq0qZHSN0BQBA%3D%3D&t=m"
                >
                    <img
                        src={appleMaps}
                        className={classes.mapsLogo}
                        alt="Apple Maps"
                    />
                    Apple Maps
                </MenuItem>
                <MenuItem
                    onClick={handleClose}
                    component="a"
                    href="https://waze.com/ul/hswbbtuyzw"
                >
                    <img
                        src={waze}
                        className={classes.mapsLogo}
                        alt="Waze"
                    />
                    Waze
                </MenuItem>
            </Menu>
        </div>
    );
}

export default withStyles(styles)(SimpleMenu);
