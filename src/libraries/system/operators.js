import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { effectAction as effectSystemAction } from './actions';

export const effect = (effectCreator, effectResponseAction, additionalResponseActions) => pipe(
    map((data) => effectSystemAction({
        effectCreator: () => Promise.resolve(effectCreator(data)),
        effectResponseAction,
        additionalResponseActions,
    })),
);
