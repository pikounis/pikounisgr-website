import { forwardRef } from 'react';
import { NavLink } from 'react-router-i18n';

const RefLink = forwardRef(
    (props, ref) => <NavLink {...props} ref={ref} />
);

export default RefLink;
