import { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import cert1 from '../../../../assets/awards/cert1.png';
import cert2 from '../../../../assets/awards/cert2.png';
import cert3 from '../../../../assets/awards/cert3.png';
import news1 from '../../../../assets/news/realtaste2.png';
import news2 from '../../../../assets/news/efimerida2.png';
import news3 from '../../../../assets/news/mamalakis.png';
import AlertDialog from './components/alertDialog';
import styles from './styles';

const MediaCard = ({ classes }) => {
    const initState = { open: false, img: null };
    const [photoDialog, setOpenDialog] = useState(initState);

    const onClose = () => setOpenDialog(initState);

    return (
        <div>
            <AlertDialog open={photoDialog.open} img={photoDialog.img} onClose={onClose} />
            <Grid
                container
                spacing={10}
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
                style={{ paddingTop: 20 }}
            >
                <Grid item onClick={() => setOpenDialog({ open: true, img: cert1 })}>
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
                <Grid item onClick={() => setOpenDialog({ open: true, img: cert2 })}>
                    <Card
                        className={classes.root}
                    >
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={cert2}
                                title="Contemplative Reptile"
                            />
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item onClick={() => setOpenDialog({ open: true, img: cert3 })}>
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
                <Grid item onClick={() => setOpenDialog({ open: true, img: news1 })}>
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
                <Grid item onClick={() => setOpenDialog({ open: true, img: news2 })}>
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
                <Grid item onClick={() => setOpenDialog({ open: true, img: news3 })}>
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
};

export default withStyles(styles)(MediaCard);
