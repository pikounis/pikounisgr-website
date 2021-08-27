const styles = ( theme ) => ({
    spacer: {
        paddingBottom: 70,
    },
    title: {
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 30,
        zIndex: 100,
        // fontSize: 50,
    },
    space: {
        paddingTop: 70,
    },
    text: {
        textAlign: 'justify',
    },
    paper: {
        padding: theme.spacing(4),
        margin: '3em auto',
    },
    imageContainer: {
        display: 'flex',
    },
    image: {
        width: '50%',
        margin: 'auto',
        display: 'block',
        verticalAlign: 'middle',
    },
    paperTitle: {
        marginBottom: theme.spacing(2),
    },
    gbtitle: {
        // verticalAlign: 'middle',
        alignItems: 'center',
        display: 'flex',
        paddingLeft: '1em',
        // paddingRight: '1em',
    },
    gbtitleReverse: {
        // verticalAlign: 'middle',
        alignItems: 'center',
        display: 'flex',
        // paddingLeft: '1em',
        // paddingRight: '1em',
    },
});

export default styles;
