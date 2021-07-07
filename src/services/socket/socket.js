import { Subject } from 'rxjs';
import io from 'socket.io-client';

const socketIoStream = (url, subscriptions, streamAction) => {
    const socket$ = new Subject();
    const socket = io.connect(url, { reconnect: true });

    socket.on('connect', () => socket$.next(streamAction()));

    Object.entries(subscriptions).map(([subscriber, action]) => socket
        .on(subscriber, (msg) => msg && socket$.next(action.succeeded(msg))));

    socket.on('error', (err) => socket$.error(streamAction.failed(err)));

    socket.on('disconnect', () => socket$.complete());

    return socket$;
};

export default socketIoStream;
