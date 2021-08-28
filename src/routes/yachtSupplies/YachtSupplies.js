/* eslint-disable */

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { GraphicBox } from 'components';
import I18n from '../../components/I18n/I18n';
import Container from '@material-ui/core/Container';
import photo1 from '../../assets/yachtSupplies/photo01.png';
import photo2 from '../../assets/yachtSupplies/van_yacht.png';
import photo3 from '../../assets/yachtSupplies/quality_guarantee.png';


const YachtSupplies = ({ classes }) => (
    <Container>
        <div className={classes.spacer}/>
        <Typography
            variant={'h3'}
            className={classes.title}
        >
            <I18n t="yachtSupplies" />
        </Typography>
        <div className={classes.spacer}/>
        <GraphicBox
            graphic={(
                <img
                    className={classes.image}
                    src={photo1}
                    alt="graphic"
                />
                // <Typography
                //     variant="h3"
                //     className={classes.gbtitleReverse}
                // >
                //     Development
                // </Typography>
            )}
            rtl
            paperProps={{
                className: classes.paper,
            }}
            gridProps={{
                className: classes.imageContainer,
            }}
        >
            <Typography className={classes.text}>
                <I18n t="ys1" />
            </Typography>
        </GraphicBox>
        <GraphicBox
            graphic={(
                <img
                    className={classes.image}
                    src={photo2}
                    alt="graphic"
                />
                // <Typography
                //     variant="h3"
                //     className={classes.gbtitle}
                // >
                //     Global
                // </Typography>
            )}
            paperProps={{
                className: classes.paper,
            }}
            gridProps={{
                className: classes.imageContainer,
            }}
        >
            <Typography className={classes.text}>
                <I18n t="ys2" />
            </Typography>
        </GraphicBox>
        <GraphicBox
            graphic={(
                <img
                    className={classes.image}
                    src={photo3}
                    alt="graphic"
                />
                // <Typography
                //     variant="h3"
                //     className={classes.gbtitleReverse}
                // >
                //     Development
                // </Typography>
            )}
            rtl
            paperProps={{
                className: classes.paper,
            }}
            gridProps={{
                className: classes.imageContainer,
            }}
        >
            <Typography className={classes.text}>
                <I18n t="ys3" />
            </Typography>
        </GraphicBox>
    </Container>

);

export default withStyles(styles)(YachtSupplies);
