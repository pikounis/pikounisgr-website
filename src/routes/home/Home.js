/* eslint-disable */

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './styles';
import I18n from '../../components/I18n/I18n';
import ComplexButton from './components/complexButton';
import shop from '../../assets/gallery/22.png';

const Home = ({ classes }) => (
    <div>
        <div>
            <img
                // src={fishbg}
                src={shop}
                alt="fish"
                className={classes.bgphoto}
            />
        </div>
        <Container maxWidth="lg" className={classes.spacer}>
            <Typography>
                <I18n t="theNamePikounis" />
            </Typography>
        </Container>
        <ComplexButton />
    </div>
);

export default withStyles(styles)(Home);
