import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            // main: '#72BDF4',
            main: '#0096ff',
            light: '#7986cb',
            dark: '#303f9f',
            contrastText: '#000000',
        },
        secondary: {
            // main: '#72BDF4',
            main: '#0096ff',
            light: '#7986cb',
            dark: '#303f9f',
            contrastText: '#ffffff',
        },
    },
});

export default lightTheme;
