import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import I18n from 'components/I18n/I18n';
import ComplexButton from './components/complexButton';
import styles from './styles';

const Home = ({ classes }) => (
    <div>
        <div className={classes.photoDiv} />
        <Container maxWidth="lg" className={classes.spacer}>
            <Typography>
                <I18n t="theNamePikounis" />
            </Typography>
        </Container>
        <ComplexButton />
    </div>
);

export default withStyles(styles)(Home);
