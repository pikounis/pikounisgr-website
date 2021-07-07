import { actionCreator } from 'libraries/system';

const dispatchNotification = actionCreator('DISPATCH_NOTIFICATION');
const deleteNotification = actionCreator('DELETE_NOTIFICATION');
const hideNotification = actionCreator('HIDE_NOTIFICATION');
const closeNotification = actionCreator('CLOSE_NOTIFICATION');

export {
    dispatchNotification,
    deleteNotification,
    hideNotification,
    closeNotification,
};
