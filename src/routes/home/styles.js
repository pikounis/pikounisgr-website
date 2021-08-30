import shop from 'assets/gallery/22.png';

const styles = (theme) => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginBottom: theme.spacing(6),
    },
    bgphoto: {
        width: '100%',
        height: '100%',
    },
    photoDiv: {
        height: '100vh',
        backgroundImage: `url(${shop})`,
        // backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    logoSize: {
        height: 200,
        margin: 'auto',
        display: 'block',
        paddingTop: 50,
    },
    shopHome: {
        // '@media screen and (max-width: 1280px)': {
        '@media screen and (max-width: 1280px)': {
            display: 'none',
        },
    },
    logoHome: {
        '@media screen and (min-width: 1280px)': {
            display: 'none',
        },
    },
    spacer: {
        paddingTop: 50,
        paddingBottom: 50,
    },
});

export default styles;
