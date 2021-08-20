/* eslint-disable */

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import MediaCard from './components/mediaCard';
import Typography from '@material-ui/core/Typography';
import I18n from '../../components/I18n/I18n';
import Container from '@material-ui/core/Container';

const Awards = ({ classes }) => (
    <Container>
        <div className={classes.spacer}/>
        <Typography
            variant={'h3'}
            className={classes.title}
        >
            <I18n t="awards" />
        </Typography>
        <MediaCard/>
        <div className={classes.spacer}/>
    </Container>

);

export default withStyles(styles)(Awards);
