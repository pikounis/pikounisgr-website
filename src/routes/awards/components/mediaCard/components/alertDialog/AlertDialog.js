import React from 'react';
import { createTheme } from '@material-ui/core/styles'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import styles from './styles';

const AlertDialog = ({ img, open, onClose, classes }) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth="lg"
            >
                <DialogContent>
                    <img
                        src={img}
                        alt="my image"
                        className={classes.images}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default withStyles(styles)(AlertDialog);
