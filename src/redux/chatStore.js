import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice'
import { socketMiddleware } from '../middleware/socketMiddleware';

export const store = configureStore({
    reducer: {
        chat: chatReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(socketMiddleware)

})