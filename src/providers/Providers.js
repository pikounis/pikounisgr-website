import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';

import ModelProvider from 'modelProvider';

const Providers = ({
    options, theme, maxNotifications, children,
}) => (
    <ModelProvider options={options}>
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={maxNotifications}>
                { children }
            </SnackbarProvider>
        </ThemeProvider>
    </ModelProvider>
);

export default Providers;
