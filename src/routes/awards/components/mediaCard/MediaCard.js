import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cert1 from '../../../../assets/awards/cert1.png';
import cert2 from '../../../../assets/awards/cert2.png';
import cert3 from '../../../../assets/awards/cert3.png';
import styles from './styles';

const MediaCard = ({ classes }) => (
    <div>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={cert1}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        pragma 1
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        description of pragma 1
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={cert2}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        pragma 1
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        description of pragma 1
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={cert3}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        pragma 1
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        description of pragma 1
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>
);

export default withStyles(styles)(MediaCard);
