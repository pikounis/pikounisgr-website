import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import I18n from '../../components/I18n/I18n';

const Home = ({ classes }) => (
    <div className={classes.container}>
        <Typography variant="h2">Welcome to the Blue Functor Template</Typography>
        <Typography variant="body1">
            <I18n t="hello" />
        </Typography>
    </div>
);

export default withStyles(styles)(Home);
