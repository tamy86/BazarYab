import React,{useEffect} from 'react';
import Container from '@material-ui/core/Container';
import BusinessContentText from '../SubComponents/business/BusinessContentText';
import axios from "axios";
import BusinessAlerts from "../SubComponents/business/BusinessAlertShow";



const divContentStyle={
    backgroundColor:'#fff',
    width:"100%",
    height:'100%',
    direction:'rtl',
    marginTop:'0px',
    padding:'145px 0',
};




function BusinessContent() {

const [token,setToken]=React.useState('');
const[error,setError]=React.useState();
 const [errormessage,setErrormesasage]=React.useState('');
 const [showerror,setShowerror]=React.useState(false);

    /*check auth user to check has aceess or not if dont have access get error and check local storage with token*/

    useEffect(()=> {

        axios.defaults.headers.common['Authorization']='Bearer '+ localStorage.getItem('token');

 const getToken=async ()=>{
        /*header config in app.js file so for all header need to check auth going and to check */
        /*baseUrl config in app.js for all url*/
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
        getToken();
    },[setToken]);


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



                    <Container maxWidth="xl" style={divContentStyle}>
                        <BusinessContentText/>

                    </Container>


                </div>

            );

        }

        else{


                localStorage.removeItem('token');
                window.location = `/business/login`;

      }

}

export default BusinessContent;
