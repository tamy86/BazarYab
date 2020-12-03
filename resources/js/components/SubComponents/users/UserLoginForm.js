import React from 'react';
import Container  from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import MobileFriendly from '@material-ui/icons/MobileFriendly';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0),
            width: '100%',
            marginTop:'40px',

        },
        "& .MuiFormLabel-root": {
            fontFamily:'IRANSans',
        },
        "& .MuiInputLabel-formControl":{
          right:0,
          left:'auto',
        },

    },
}));

const styleBgForm= {
    backgroundColor: '#f0f1f4',
    direction: 'ltr',
    width: '30%',
    height: '75%',
    minWidth:'270px',
    minHeight:'400px',
    fontFamily:'IRANSans',
    paddingTop: '40px',
    paddingBottom:'40px',

};
const headerLoginForm={
    backgroundColor:'#001a33',
    width: '100%',
    color:'#fff',
    fontFamily:'IRANSans',
    textAlign:'center',

};
const formLogin={
    textAlign:'center',
};
const mobileIconStyle={
    position:'absolute',
    float:'right',
    paddingLeft:'5px',
};

const styleButton={
    borderRadius: 3,
    color: 'black',
    height: 48,
    padding: '0 15px',
    fontFamily:'IRANSans',
    marginRight:'20px',
    width:'100%',
};
const spaceBetwenButton={
    paddingTop:'40px',
};

function UserLoginForm(){

    const classes = useStyles();

    return(
        <Container  style={styleBgForm}>

            <div className="card-header" style={headerLoginForm}>
                وروود کاربر < MobileFriendly style={mobileIconStyle}/>
            </div>

            <form className={classes.root} style={formLogin}>
                <TextField
                    id="userMobileNo"
                    label="تلفن همراه"
                />
                <TextField
                    id="userVerifyCode"
                    label="کد اعتبار سنجی"
                />
                <div style={spaceBetwenButton}>
                <Button variant="outlined" color="primary" style={styleButton}>
                    دریافت کد اعتبار سنجی  <MobileFriendly/>
                </Button>
                </div>
                <div style={spaceBetwenButton}>
                <Button variant="outlined" color="primary" style={styleButton}>
                    وررود به سامانه<LockOpenIcon/>

                </Button>
                </div>
            </form>


        </Container >
    );
}

export default UserLoginForm;