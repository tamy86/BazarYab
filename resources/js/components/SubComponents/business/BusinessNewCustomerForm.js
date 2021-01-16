import React from 'react';
import Container  from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

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

function BusinessNewCustomerForm(){

    const [disableForm,setDisableForm]=React.useState(true);

    const classes = useStyles();

    return(
        <Container  style={styleBgForm}>

            <div className="card-header" style={headerLoginForm}>
                فرم مشتری جدید<PersonAddIcon style={mobileIconStyle}/>
            </div>

            <form className={classes.root} style={formLogin}>

                <Container maxWidth='xs' xs='6'>
                    <TextField
                        id="PresentedMobileNo"
                        label="شماره همراه معرف"
                        InputProps={{endAdornment:
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                    style={{backgroundColor:"#e6e6e6",bottom:'5px'}}
                                    onClick={()=>{setDisableForm(false);}}
                                >
                                    <SearchIcon />
                                </IconButton>}}

                    />
                </Container>



                <Container maxWidth='xs' xs='6'>
                <TextField
                    id="MobileNo"
                    label="تلفن همراه"
                    disabled={disableForm}
                    InputProps={{endAdornment:<PhoneAndroidIcon/>}}
                />
                </Container>
                <Container maxWidth='xs' xs='6'>
                <TextField
                    id="name"
                    label="نام"
                    disabled={disableForm}
                    InputProps={{endAdornment:<PersonIcon/>}}
                />
                </Container>
                <Container maxWidth='xs' xs='6'>
                <TextField
                    id="family"
                    label="نام خانوادگی"
                    disabled={disableForm}
                    InputProps={{endAdornment:<PersonIcon/>}}
                />
                </Container>
                <div style={spaceBetwenButton} >
                    <Button disabled={disableForm} variant="outlined" color="primary" style={styleButton}>
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

export default BusinessNewCustomerForm;