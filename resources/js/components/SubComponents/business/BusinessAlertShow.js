import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({


    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),



         float:'right',

        },
        "& .MuiAlert-message":{
            fontFamily:'IRANSans',

        },

    },
}));

function BusinessAlerts(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
                <Alert onClose={handleClose} severity={props.errortype}>
                    {props.errormessage}
                </Alert>
            </Snackbar>
            {/*/!*<Alert severity="error"></Alert>*!/*/}
            {/*/!*<Alert severity="warning">This is a warning message!</Alert>*!/*/}
            {/*/!*<Alert severity="info">This is an information message!</Alert>*!/*/}
            {/*<Alert severity={props.errortype}>This is a success message!</Alert>*/}
        </div>
    );
}

export default BusinessAlerts;