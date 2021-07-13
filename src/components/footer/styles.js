/* eslint-disable */

const styles = (theme) => ({
    container: {
        backgroundColor: '#f3f3f3',
        // padding: '16px',
    },
    item: {
        // borderTop: '1px solid #ffffff',
        // borderLeft: '1px solid #ffffff',
        // borderRight: '1px solid #ffffff',
        padding: '16px',
        alignItems: 'center',
        display: 'flex',
    },
    ItemsAtCenter: {
        alignItems: 'center',
        display: 'flex',

    },
    imgSize: {
        height: '50px',

        // width: '500px',
    },
    '@media screen and (max-width: 600px)': {
        imgSize: {
            height: '50px',
            margin: 'auto',
        },
    },
});

export default styles;
