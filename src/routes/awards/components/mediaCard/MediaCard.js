import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import cert1 from '../../../../assets/awards/cert1.png';
import cert2 from '../../../../assets/awards/cert2.png';
import cert3 from '../../../../assets/awards/cert3.png';
import news1 from '../../../../assets/news/realtaste2.png';
import news2 from '../../../../assets/news/efimerida2.png';
import news3 from '../../../../assets/news/mamalakis.png';
import styles from './styles';

const MediaCard = ({ classes }) => (
    <div>
        <Grid
            container
            spacing={10}
            direction="row"
            justify="space-evenly"
            alignItems="stretch"
            style={{ paddingTop: 20 }}
        >
            <Grid item>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={cert1}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={cert2}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={cert3}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={news1}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={news2}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={news3}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </div>
);

export default withStyles(styles)(MediaCard);
