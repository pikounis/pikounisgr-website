import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Providers from 'providers';
import App from 'components/app/App';
import { lightTheme } from 'themes';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <StrictMode>
        <Providers
            options={{ appName: '' }}
            theme={lightTheme}
            maxNotifications={3}
        >
            <CssBaseline />
            <App />
        </Providers>
    </StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
