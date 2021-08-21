const styles = (theme) => ({
    root: {
        flexGrow: 1,
        // color: '#000000',
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
    ItemsAtCenter: {
        alignItems: 'center',
        display: 'flex',
        // justifyContent: 'center',
        justifyContent: 'flex-start',
    },
    centerButtons: {
        alignItems: 'center',
        justifyContent: 'center',
        // display: 'flex',
    },
});

export default styles;
