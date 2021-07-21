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
});

export default styles;
