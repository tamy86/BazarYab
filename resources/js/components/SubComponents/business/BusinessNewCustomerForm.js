import React, {useEffect} from 'react';
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
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import BusinessAlerts from "./BusinessAlertShow";


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
    const [presentedPhone,setPresentedPhone]=React.useState();
    const [presentedId,setPresentedId]=React.useState();
    const [businessUserId,setBusinessUserId]=React.useState();
    const[error,setError]=React.useState();
    const [showerror,setShowerror]=React.useState(false);
    const [errormessage,setErrormesasage]=React.useState('');


    const classes = useStyles();



    /*check auth user to check has aceess or not if dont have access get error and check local storage with token*/

    useEffect(()=> {


        const getBusinessUserId=async ()=>{
            /*header config in app.js file so for all header need to check auth going and to check */
            /*baseUrl config in app.js for all url*/
            try{
                const  res=  await axios.get('/api/business/businessuserid');

                setBusinessUserId(res.data['bussiness_user_id']);

            }
            catch(error){
                setError(error.response.status);
                setErrormesasage(
                    {
                        msg: error.response.data['message'],
                        key: Math.random(),
                        errortype: error.response.data['message type'],
                    });
                setShowerror(true);
            }
        };
        getBusinessUserId();
    },[setBusinessUserId]);






    function searchPresentedPhone(){
        const mobile = /^(09)(12|19|35|36|37|38|39|32|21|22|31|34|13|14|18|17|16|15|11|10|20|90|91|92|93|94|01|02|03|04|05|30|33|)\d{7}$/g;
        const result = presentedPhone.match(mobile);

        if((result)&&(presentedPhone !== ''))
        {
            axios.post('/api/business/searchpresented',
                {
                    'presentedphone':presentedPhone,
                    'businessuserid':businessUserId,
                }).then((res)=>{


                    if((res.status===200)&&((res.data['Success']===1)||(res.data['Success']===2)))
                    {

                        setBusinessUserId(res.data['business_user_id']);
                        setPresentedId(res.data['presented_id']);
                        setErrormesasage({
                           msg: res.data['message'],
                           key: Math.random(),
                           errortype:res.data['message_type'],
                        });
                        setShowerror(true);
                        setDisableForm(false);
                    }else{

                        setErrormesasage({
                            msg: res.data['message'],
                            key: Math.random(),
                            errortype:res.data['message_type'],
                        });
                        setShowerror(true);
                        }



            });

        }else{
            setErrormesasage(
                {
                    msg: 'شماره همراه صحیح نمیباشد',
                    key: Math.random(),
                    errortype: 'warning'
                });

            setShowerror(true);

        }
    }



    return(
        <Container  style={styleBgForm}>

            {showerror ?
                <BusinessAlerts key={errormessage.key} errormessage={errormessage.msg} errortype={errormessage.errortype}/>:null
            }

            <div className="card-header" style={headerLoginForm}>
                فرم مشتری جدید<PersonAddIcon style={mobileIconStyle}/>
            </div>

            <form className={classes.root} style={formLogin}>

                <Container maxWidth='xs' xs='6'>
                    <TextField
                        id="PresentedMobileNo"
                        label="تلفن همراه معرف(09xxxxxxxxx)"
                        type="number"
                        onChange={event=>setPresentedPhone(event.target.value)}
                        value={presentedPhone}
                        InputProps={{endAdornment:
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="span"
                                    style={{backgroundColor:"#e6e6e6",bottom:'5px'}}
                                    onClick={()=>{searchPresentedPhone();}}
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