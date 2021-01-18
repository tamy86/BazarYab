import React ,{useEffect}from 'react';
import Container  from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import MobileFriendly from '@material-ui/icons/MobileFriendly';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


import axios from 'axios';
import BusinessAlerts from "./BusinessAlertShow";
import App from "../../../app";


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

const selectStyleLabel={
    float: 'right',
    marginTop: '55px',

};
const selectStyle={
width:'100%',
    direction: 'rtl',
    fontFamily:'IRANSans',
};



function BusinessLoginForm(){

    const classes = useStyles();

    const [bussinesstype, setBusinesstype] = React.useState();
    const [categoryname, setCategoryname]=React.useState([]);
    const [loginbuttondisabled,setLoginbuttondisabled]=React.useState(true);
    const [phonevalue,setPhonevalue]=React.useState('');
    const [verifyvalue,setVerifyvalue]=React.useState('');
    const [showerror,setShowerror]=React.useState(false);
    const [errormessage,setErrormesasage]=React.useState('');
    const [error,setError]=React.useState();
    const [token,setToken]=React.useState();


if(localStorage.getItem('token')!==null) {
    window.location=`/business/home`;

}

    /*
    * get business category from bk end db
    * */
    useEffect(() => {

        const getListBusiness = async () => {
            try {

                const res = await axios.get('/api/business/businesslist');

                setCategoryname(res.data);

            }
            catch (error) {
                setErrormesasage(
                    {
                        msg: error.response.data['message'],
                        key: Math.random(),
                        errortype: error.response.data['message type'],
                    });
                setShowerror(true);
                setLoginbuttondisabled(false);
            }

        };
        getListBusiness();
    }, [setCategoryname]);


    const handleChange = (event) => {

        setBusinesstype(event.target.value);

    };

    /*
    recive verify code button
    * phone is input
    * out put is msg and succss and status code from bkend
    * */


    function reciveSmsCode() {
        // (0|\+98)?([ ]|,|-|[()]){0,2}9[1|2|3|4]([ ]|,|-|[()]){0,2}(?:[0-9]([ ]|,|-|[()]){0,2}){8}

        const mobile = /^(09)(12|19|35|36|37|38|39|32|21|22|31|34|13|14|18|17|16|15|11|10|20|90|91|92|93|94|01|02|03|04|05|30|33|)\d{7}$/g;
        const result = phonevalue.match(mobile);

        if ((phonevalue !== '') && (result) && (bussinesstype !== undefined)) {
            axios.post('/api/business/getverify', {'phone': phonevalue, 'bussinesscategoryId': bussinesstype}).then(
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
                    setError(error.response.status);
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
                    msg: 'شماره همراه وارد شده صحیح نمی باشد یا نوع کسب و کار را انتخاب نکرده اید',
                    key: Math.random(),
                    errortype: 'warning'
                });

            setShowerror(true);
        }
    }


    // useEffect(()=>{
    //     function checkVerifyCode () {
    //         try{
    //
    //                 axios.post('/api/business/checkverify', {
    //                     'phone': phonevalue,
    //                     'verify': verifyvalue,
    //                     'bussinesscategoryId': bussinesstype
    //                 }).then((res) => {
    //
    //                     if ((res.data['Success'] === 1)) {
    //
    //                         const token = res.data['access_token'];
    //
    //                         localStorage.setItem('token', token);
    //
    //                         window.location = `/business/home`;
    //                         setErrormesasage(
    //                             {
    //                                 msg: res.data['message'],
    //                                 key: Math.random(),
    //                                 errortype: res.data['message type'],
    //
    //                             });
    //                         setShowerror(true);
    //
    //
    //                     }
    //
    //                 })
    //
    //
    //         }catch (error) {
    //             setErrormesasage(
    //                 {
    //                     msg: error.response.data['message'],
    //                     key: Math.random(),
    //                     errortype: error.response.data['message type'],
    //                 });
    //             setShowerror(true);
    //         }
    //     };
    //     checkVerifyCode();
    // },[token]);





    function checkVerifyCode() {

        if ((verifyvalue !== '')) {
            axios.post('/api/business/checkverify', {
                'phone': phonevalue,
                'verify': verifyvalue,
                'bussinesscategoryId': bussinesstype
            }).then((res) => {

                if ((res.data['Success'] === 1)) {

                    const token = res.data['access_token'];

                    localStorage.setItem('token', token);

                    window.location = `/business/home`;
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
                <BusinessAlerts key={errormessage.key} errormessage={errormessage.msg} errortype={errormessage.errortype}/>:null
            }

            <div className="card-header" style={headerLoginForm}>
                وروود کسب و کار <MobileFriendly style={mobileIconStyle}/>
            </div>

            <form className={classes.root} style={formLogin}>
                <TextField
                    id="businessMobileNo"
                    label="تلفن همراه"
                    onChange={event=>setPhonevalue(event.target.value)}
                    value={phonevalue}
                />
                <TextField
                    id="businessVerifyCode"
                    label="کد اعتبار سنجی"
                    onChange={event=>setVerifyvalue(event.target.value)}
                    value={verifyvalue}
                />

                <InputLabel id="businessKind" style={selectStyleLabel}>کسب و کار</InputLabel>

                <Select
                    labelId="businessKind"
                    id='businessKind'
                    value={bussinesstype}
                    onChange={handleChange}
                    style={selectStyle} >



                    {categoryname.map(cate=>{

                 return(
                     <MenuItem key={cate.id} value={cate.id}>{cate.category_name}</MenuItem>
                 )


                    })}


                </Select>
                <div style={spaceBetwenButton}>
                    <Button variant="outlined" color="primary" style={styleButton} onClick={reciveSmsCode}>
                        دریافت کد اعتبار سنجی  <MobileFriendly/>
                    </Button>
                </div>

                <div style={spaceBetwenButton}>
                    <Button variant="outlined" color="primary" onClick={checkVerifyCode} style={styleButton} disabled={loginbuttondisabled}>
                        وررود به سامانه<LockOpenIcon/>

                    </Button>
                </div>





            </form>

        </Container >

    );

}

export default BusinessLoginForm;