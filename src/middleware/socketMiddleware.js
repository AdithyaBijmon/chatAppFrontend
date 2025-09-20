import { io } from 'socket.io-client';
import { addmessage, setStatus, setMyId } from '../redux/chatSlice';

export const socketMiddleware = (store) => {
    const socket = io('http://localhost:4000')

    socket.on('receive_message', (messageObj) => {
        store.dispatch(addmessage(messageObj))
    })

    socket.on('connect', () => {
        store.dispatch(setStatus('connected'))
        store.dispatch(setMyId(socket.id))
    })

    socket.on('disconnect', () => {
        store.dispatch(setStatus('disconnect'))
    })
    return (next) => (action) => {
        if (action.type === 'chat/sendMessage') {
            const messagePayload = action.payload; 
            socket.emit('send_message', messagePayload);
        }
        return next(action);
    };
}