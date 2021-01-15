import React from 'react';
import Container  from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import MobileFriendly from '@material-ui/icons/MobileFriendly';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import UserAlerts from "../users/UserAlertShow";

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

    const [loginbuttondisabled,setLoginbuttondisabled]=React.useState(true);
    const [phonevalue,setPhonevalue]=React.useState('');
    const [verifyvalue,setVerifyvalue]=React.useState('');
    const [showerror,setShowerror]=React.useState(false);
    const [errormessage,setErrormesasage]=React.useState('');


    function reciveSmsCode() {

        const mobile = /(0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}/g;
        const result = phonevalue.match(mobile);

        if ((phonevalue !== '') && (result)) {
            axios.post('/api/user/getverify', {'phone': phonevalue}).then(
                (res) => {

                    // setErrorCode(res.statusCode);


                    if ((res.data['Success'] === 1)) {
                        //handel to show error alert many times
                        setErrormesasage(
                            {
                                msg: res.data['message'],
                                key: Math.random(),
                                errortype: res.data['message type'],
                            });
                        //handel to show error alert

                        setShowerror(true);
                        setLoginbuttondisabled(false);
                    }
                })
                .catch((error) => {
                    // setError(error.response.status);
                    setErrormesasage(
                        {
                            msg: error.response.data['message'],
                            key: Math.random(),
                            errortype: error.response.data['message type'],
                        });
                    setShowerror(true);
                });


        }
        else {
            setLoginbuttondisabled(true);

            setErrormesasage(
                {
                    msg: 'شماره همراه وارد شده صحیح نمی باشد',
                    key: Math.random(),
                    errortype: 'warning'
                });

            setShowerror(true);
        }
    }

    function checkVerifyCode() {

        if ((verifyvalue !== '')) {
            axios.post('/api/user/checkverify', {
                'phone': phonevalue,
                'verify': verifyvalue,
            }).then((res) => {

                if ((res.data['Success'] === 1)) {

                    const token = res.data['access_token'];


                    localStorage.setItem('token', token);

                    window.location = `/user/home`;
                    setErrormesasage(
                        {
                            msg: res.data['message'],
                            key: Math.random(),
                            errortype: res.data['message type'],

                        });
                    setShowerror(true);


                }
            })
                .catch((error) => {

                    setErrormesasage(
                        {
                            msg: error.response.data['message'],
                            key: Math.random(),
                            errortype: error.response.data['message type'],
                        });
                    setShowerror(true);

                });

        }
        else {
            setErrormesasage(
                {
                    msg: 'کد اعتبار سنجی خالی میباشد',
                    key: Math.random(),
                    errortype: 'warning'
                }
            );
        }
    }





    return(
        <Container  style={styleBgForm}>

            {showerror ?
                <UserAlerts key={errormessage.key} errormessage={errormessage.msg} errortype={errormessage.errortype}/>:null
            }

            <div className="card-header" style={headerLoginForm}>
                وروود کاربر < MobileFriendly style={mobileIconStyle}/>
            </div>

            <form className={classes.root} style={formLogin}>
                <TextField
                    id="userMobileNo"
                    label="تلفن همراه"
                    onChange={event=>setPhonevalue(event.target.value)}
                    value={phonevalue}
                />
                <TextField
                    id="userVerifyCode"
                    label="کد اعتبار سنجی"
                    onChange={event=>setVerifyvalue(event.target.value)}
                    value={verifyvalue}
                />

                <div style={spaceBetwenButton}>
                <Button variant="outlined" color="primary" style={styleButton} onClick={reciveSmsCode}>
                    دریافت کد اعتبار سنجی  <MobileFriendly/>
                </Button>
                </div>

                <div style={spaceBetwenButton}>
                <Button variant="outlined" color="primary" style={styleButton} onClick={checkVerifyCode} disabled={loginbuttondisabled}>
                    وررود به سامانه<LockOpenIcon/>

                </Button>
                </div>
            </form>


        </Container >
    );
}

export default UserLoginForm;