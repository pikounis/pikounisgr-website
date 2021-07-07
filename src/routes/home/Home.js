import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import logo from 'assets/logo/whiteLogo.svg';
import styles from './styles';

const Home = ({ classes }) => (
    <div className={classes.container}>
        <img className={classes.logo} src={logo} alt="Blue Functor Logo" />
        <Typography variant="h2">Welcome to the Blue Functor Template</Typography>
        <Typography variant="body1">
            Edit&nbsp;
            <strong>&apos;/src/components/app&apos;</strong>
            &nbsp;to get started.
        </Typography>
    </div>
);

export default withStyles(styles)(Home);
