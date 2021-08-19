import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import photo from '../../../../assets/trofodosies.png';
import I18n from '../../../../components/I18n/I18n';
import styles from './styles';

const images = [
    {
        url: photo,
        title: <I18n t="yachtSupplies" />,
        width: '100%',
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
                href="https://newport-mps.gr"
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
