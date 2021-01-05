import React,{useEffect} from 'react';
import Container from '@material-ui/core/Container';
import BusinessContentText from '../SubComponents/business/BusinessContentText';
import BusinessHeader from '../Business/BusinessHeader';
import BusinessFooter from '../Business/BusinessFooter';
import axios from "axios";
import BusinessAlerts from "../SubComponents/business/BusinessAlertShow";



const divContentStyle={
    backgroundColor:'#fff',
    width:"100%",
    height:'100%',
    direction:'rtl',
    marginTop:'0px',
    // paddingTop:'50px',
    padding:'145px 0',
};







function BusinessContent() {

// const [tokenstorage,setTokenstorage]=React.useState();
const [token,setToken]=React.useState('');
const[error,setError]=React.useState();
 const [errormessage,setErrormesasage]=React.useState('');
 const [showerror,setShowerror]=React.useState(false);

/*take token and set in local storage*/

    /*check auth user to check has aceess or not if dont have access get error and check local storage with token*/

    useEffect(()=> {


 const gettt=async ()=>{
        /*header config in app.js file so for all header need to check auth going and to check */
try{
 const  res=  await axios.get('/api/business/gettoken');

         setToken(res.data['token']);

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
        gettt();
    },[setToken]);

/*set token in local storage*/


    if((error===401)||(error===400)||(error===500)||(error===408)||(error===402)) {
        localStorage.removeItem('token');
        window.location = `/business/login`;
    }
else
    /*check auth user to check has aceess or not if dont have access get error and check local storage with token*/
        if ({token} && localStorage.getItem('token')) {
            return (

                <div>

                    {showerror ?
                        <BusinessAlerts key={errormessage.key} errormessage={errormessage.msg} errortype={errormessage.errortype}/>:null
                    }

                    <BusinessHeader/>

                    <Container maxWidth="xl" style={divContentStyle}>
                        <BusinessContentText/>

                    </Container>

                    <BusinessFooter/>
                </div>

            );

        }

        else{


                localStorage.removeItem('token');
                window.location = `/business/login`;

      }

}

export default BusinessContent;
