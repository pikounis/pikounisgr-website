import { createReducer } from '@reduxjs/toolkit';

const initState = {
    redux: true,
};

const reducer = createReducer(initState, (builder) => builder);

export default reducer;
