import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import configStore from 'libraries/configStore';
import { epics as systemEpics } from 'libraries/system';

import { reducer as ui } from 'models/ui';
import { reducer as notifications, epics as notificationsEpics } from 'models/notifications';

const ModelProvider = ({ options, children }) => {
    const rootReducer = combineReducers({
        ui,
        notifications,
    });

    const rootEpic = combineEpics(systemEpics, notificationsEpics);

    const epicMiddleware = createEpicMiddleware({
        dependencies: { options },
    });

    const middleWares = [epicMiddleware];
    const store = configStore(rootReducer, {}, middleWares);

    epicMiddleware.run(rootEpic);

    return <Provider store={store}>{children}</Provider>;
};

export default ModelProvider;
