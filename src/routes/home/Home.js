/* eslint-disable */

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import I18n from '../../components/I18n/I18n';
// import fishbg from '../../assets/fishbg.png';
import shop from '../../assets/gallery/22.png';

const Home = ({ classes }) => (
    <div>
        {/*<Typography variant="body1">*/}
        {/*    <I18n t="hello" />*/}
        {/*</Typography>*/}
        {/*<h1>Home</h1>*/}
        <img
            // src={fishbg}
            src={shop}
            alt="fish"
            className={classes.bgphoto}
        />

        <Typography>
            <I18n t="theNamePikounis" />
        </Typography>
    </div>
);

export default withStyles(styles)(Home);
