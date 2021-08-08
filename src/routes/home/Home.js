/* eslint-disable */

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import I18n from '../../components/I18n/I18n';
import fishbg from '../../assets/fishbg.png';

const Home = ({ classes }) => (
    <div>
        <Typography variant="body1">
            <I18n t="hello" />
        </Typography>
        {/*<h1>Home</h1>*/}
        <img
            src={fishbg}
            alt="fish"
            className={classes.bgphoto}
        />

        <Typography>
            Tο όνομα Πικούνης αποτελεί ορόσημο για την αγορά φρέσκου ψαριού,
            αφού μας εμπιστεύονται τα καλύτερα εστιατόρια και ξενοδοχεία της Αθήνας.
            Επισκεφθείτε σήμερα κιόλας το κατάστημα μας στην Κηφισιά για να ανακαλύψετε
            ένα μοναδικό ψαράδικο και να απολαύσετε την τεράστια ποικιλία σε ψάρια,
            θαλασσινά και οστρακοειδή, ακόμη και στα πιο δυσεύρετα είδη.
        </Typography>
    </div>
);

export default withStyles(styles)(Home);
