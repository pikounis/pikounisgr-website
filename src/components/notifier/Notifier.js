import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';

import { hideNotification } from 'models/notifications/actions';
import { notifications } from 'models/notifications/selectors';
import { withProps } from 'libraries/components';

const Notifier = ({ notifications, hideNotification }) => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [displayed, setDisplayed] = useState([]);

    useEffect(() => {
        const storeDisplayed = (id) => setDisplayed([...displayed, id]);

        const removeDisplayed = (id) => setDisplayed([...displayed.filter((key) => id !== key)]);

        notifications.forEach(({ message, options = {}, dismissed = false }) => {
            if (dismissed) {
                closeSnackbar(options?.key);
                return;
            }

            if (displayed.includes(options?.key)) return;

            enqueueSnackbar(message, {
                key: options?.key,
                ...options,
                onClose: (event, reason, myKey) => options.onClose?.(event, reason, myKey),
                onExited: (event, myKey) => {
                    hideNotification(myKey);
                    removeDisplayed(myKey);
                },
            });
            storeDisplayed(options?.key);
        });
    }, [notifications, hideNotification, displayed, closeSnackbar, enqueueSnackbar]);

    return null;
};

export default withProps({ notifications, hideNotification })(Notifier);
