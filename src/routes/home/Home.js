import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import I18n from 'components/I18n/I18n';
import ComplexButton from './components/complexButton';
import pikLogo from '../../assets/logo1112.png';
import styles from './styles';

const Home = ({ classes }) => (
    <div>
        <div className={classes.shopHome}>
            <div className={classes.photoDiv} />
        </div>
        <div className={classes.logoHome}>
            <img src={pikLogo} className={classes.logoSize} />
        </div>

        <Container maxWidth="lg" className={classes.spacer}>
            <Typography align="justify">
                <I18n t="theNamePikounis" />
            </Typography>
        </Container>
        <ComplexButton />
    </div>
);

export default withStyles(styles)(Home);
