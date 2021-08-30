const styles = (theme) => ({
    '@media screen and (max-width: 1024px)': {
        root1: {
            flexGrow: 1,
            // display: 'none',
            // color: '#000000',
        },
        root2: {
            flexGrow: 1,
            display: 'none',
            // color: '#000000',
        },
    },
    '@media screen and (min-width: 1025px)': {
        root1: {
            flexGrow: 1,
            display: 'none',
            // color: '#000000',
        },
        root2: {
            flexGrow: 1,
            // display: 'none',
            // color: '#000000',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    container: {
        // backgroundColor: '#f3f3f3',
        // padding: '16px',
        // flexGrow: 1,
    },
    item: {
        padding: '16px',
        alignItems: 'center',
        display: 'flex',
    },
    ItemsAtCenter1: {
        alignItems: 'center',
        display: 'flex',
        // justifyContent: 'center',
        justifyContent: 'flex-start',
    },
    ItemsAtCenter2: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        // justifyContent: 'flex-start',
    },
    centerButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
});

export default styles;
