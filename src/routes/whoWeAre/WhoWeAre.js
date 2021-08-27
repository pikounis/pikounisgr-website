/* eslint-disable */

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import I18n from '../../components/I18n/I18n';
import Container from '@material-ui/core/Container';

const WhoWeAre = ({ classes }) => (
    <Container>
        <div className={classes.spacer}/>
        <Typography
            variant={'h3'}
            className={classes.title}
        >
            <I18n t="yachtSupplies" />
        </Typography>
        <div className={classes.spacer}/>
    </Container>

);

export default withStyles(styles)(WhoWeAre);
