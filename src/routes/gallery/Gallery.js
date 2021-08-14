/* eslint-disable */

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import BasicImageList from './components/basicImageList';
import styles from './styles';
import I18n from '../../components/I18n/I18n';


const Gallery = ({ classes }) => (
    <Container maxWidth={'md'}>
        <div className={classes.space} />
        <Typography
            variant={'h3'}
            className={classes.title}
        >
            <I18n t="gallery" />
        </Typography>
        <BasicImageList className={classes.gallery}/>
    </Container>
);

export default withStyles(styles)(Gallery);
