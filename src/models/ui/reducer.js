import { createReducer } from '@reduxjs/toolkit';
import { changeRoute } from './actions';

const routeIndex = [
    '/',
    '/yacht-supplies',
    '/gallery',
    '/awards',
    '/contact',
];

const getTabFromPath = (path) => routeIndex.indexOf(path ?? window.location.pathname);

const initState = {
    redux: true,
    tabIndex: getTabFromPath(),
};

const reducer = createReducer(initState, (builder) => builder
    .addCase(changeRoute, (state, { payload }) => {
        state.tabIndex = getTabFromPath(payload);
    }));

export default reducer;
