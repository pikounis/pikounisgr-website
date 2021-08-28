import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import photo1 from '../../../../assets/yacht.png';
import photo2 from '../../../../assets/awards/cert2.png';
import photo3 from '../../../../assets/gallery/26.png';
import photo4 from '../../../../assets/news/profile.png';
import I18n from '../../../../components/I18n/I18n';
import styles from './styles';
import { changeRoute } from '../../../../models/ui';

const images = [
    {
        url: photo1,
        title: <I18n t="yachtSupplies" />,
        width: '40%',
        link: '/yacht-supplies',
    },
    {
        url: photo2,
        title: <I18n t="awards" />,
        width: '20%',
        link: '/awards',
    },
    {
        url: photo3,
        title: <I18n t="gallery" />,
        width: '20%',
        link: '/gallery',
    },
    {
        url: photo4,
        title: <I18n t="contact" />,
        width: '20%',
        link: '/contact',
    },
];

const ComplexButton = ({ classes }) => (
    <div className={classes.root}>
        {images.map((image) => (
            <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: image.width,
                }}
                component={Link}
                to={image.link}
                onClick={() => {
                    changeRoute('/yacht-supplies');
                }}
            >
                <span
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${image.url})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {image.title}
                        <span className={classes.imageMarked} />
                    </Typography>
                </span>
            </ButtonBase>
        ))}
    </div>
);

export default withStyles(styles)(ComplexButton);
