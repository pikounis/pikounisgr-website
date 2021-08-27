import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';

const GraphicBox = ({
    width,
    rtl,
    graphic,
    paperProps,
    gridProps,
    children,
}) => {
    const isMobile = isWidthDown('sm', width);

    return isMobile ? (
        <div>
            <Paper {...paperProps}>
                { children }
            </Paper>
            { graphic }
        </div>
    ) : (
        <Grid
            container
            direction={rtl ? 'row-reverse' : 'row'}
            {...gridProps}
        >
            <Grid md={8} item {...gridProps}>
                <Paper {...paperProps}>
                    { children }
                </Paper>
            </Grid>
            <Grid md={4} item {...gridProps}>
                { graphic }
            </Grid>
        </Grid>
    );
};

export default withWidth()(GraphicBox);
