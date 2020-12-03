import React from 'react';
import Container  from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import StoreIcon from '@material-ui/icons/Store';
import BusinessIcon from '@material-ui/icons/Business';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0),
            width: '100%',
            marginTop:'40px',
            direction: 'rtl',

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
    width: '70%',
    height: '100%',
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
    fontSize:'20px',

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
    width:'50%',
    marginTop: '15px',
};
const spaceBetwenButton={
    paddingTop:'40px',
};

function BusinessEditProfileForm(){

    const classes = useStyles();

    return(
        <Container  style={styleBgForm}>

            <div className="card-header" style={headerLoginForm}>
                فرم ویرایش کسب و کار<StoreIcon style={mobileIconStyle}/>
            </div>

            <form className={classes.root} style={formLogin}>
                <Container maxWidth='xs' xs='6'>
                    <TextField
                        id="mobileNoShoping"
                        label="تلفن همراه"
                        InputProps={{endAdornment:<PhoneAndroidIcon/>}}
                        disabled={true}
                    />
                </Container>
                <Container maxWidth='xs' xs='6'>
                    <TextField
                        id="shopingName"
                        label="نام فروشگاه"
                        InputProps={{endAdornment:<StoreIcon/>}}
                    />
                </Container>
                <Container maxWidth='xs' xs='6'>
                    <TextField
                        id="shopingAddress"
                        label="آدرس فروشگاه"
                        InputProps={{endAdornment:<BusinessIcon/>}}
                    />
                </Container>
                <div style={spaceBetwenButton}>
                    <Button variant="outlined" color="primary" style={styleButton}>
                        ذخیره فرم<SaveIcon/>
                    </Button>
                    <Button variant="outlined" color="primary" style={styleButton}>
                        کنسل فرم<CancelIcon/>
                    </Button>
                </div>


            </form>


        </Container >
    );
}

export default BusinessEditProfileForm;