/* eslint-disable react/display-name */
import { memo } from 'react';
import useProps from './useProps';

const EMPTY_OBJ = {};

const withProps = (propsCreators = EMPTY_OBJ) => (Component) => {
    const MemoizedComponent = memo(Component);
    return (props) => {
        const modelProps = useProps(propsCreators);
        return <MemoizedComponent {...modelProps} {...props} />;
    };
};
export default withProps;
