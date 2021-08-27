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
    '@media screen and (max-width: 1048px)': {

    },
    spacer: {
        paddingTop: 50,
        paddingBottom: 50,
    },
});

export default styles;
