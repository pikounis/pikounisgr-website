import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

const initState = {
    notifications: [],
    oldNotifications: [],
};

const reducer = createReducer(initState, (builder) => builder
    .addCase(actions.dispatchNotification, (state, { payload }) => {
        state.notifications.push(payload);
    })
    .addCase(actions.hideNotification, (state, { payload }) => {
        !state.oldNotifications.includes(
            state.notifications.find((not) => not.options.key === payload),
        )
            && state.oldNotifications.push(
                state.notifications.find((not) => not.options.key === payload),
            );
        state.notifications.splice(
            state.notifications.findIndex((not) => not.options.key === payload),
            1,
        );
    })
    .addCase(actions.closeNotification, (state, { payload }) => {
        state.notifications = state.notifications
            .map((not) => (not?.options?.key === payload ? { ...not, dismissed: true } : not));
    }));

export default reducer;
