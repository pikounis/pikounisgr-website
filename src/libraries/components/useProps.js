import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

const EMPTY_OBJ = {};

const separatePropCreators = (propsCreators = EMPTY_OBJ) => Object.entries(propsCreators)
    .reduce(
        (creators, [key, creator]) => (creator.type
            ? {
                ...creators,
                actionPropsCreators: {
                    ...creators.actionPropsCreators,
                    [key]: creator,
                },
            }
            : {
                ...creators,
                statePropsCreators: {
                    ...creators.statePropsCreators,
                    [key]: creator,
                },
            }),
        { statePropsCreators: EMPTY_OBJ, actionPropsCreators: EMPTY_OBJ },
    );

const createStateProps = (propSelectors = EMPTY_OBJ) => (state) => Object.entries(propSelectors)
    .reduce((stateProps, [key, propSelector]) => {
        const newStateProps = {
            ...stateProps,
            [key]: propSelector(state),
        };

        return newStateProps;
    }, {});

const useProps = (propsCreators = EMPTY_OBJ) => {
    const { statePropsCreators, actionPropsCreators } = separatePropCreators(propsCreators);

    const stateProps = useSelector(createStateProps(statePropsCreators), shallowEqual);

    const dispatch = useDispatch();

    const actionProps = useMemo(
        () => bindActionCreators(actionPropsCreators, dispatch),
        // eslint-disable-next-line
        [],
    );

    return { ...stateProps, ...actionProps };
};

export default useProps;
