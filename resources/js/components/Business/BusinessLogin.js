import React from 'react';
import Container from '@material-ui/core/Container';
import BusinessLoginForm from '../SubComponents/business/BusinessLoginForm';


const userLoginStyle={
    backgroundColor:'#fff',
    width:"100%",
    height:'100%',
    direction:'rtl',
    marginTop:'0px',
    paddingTop:'50px',
    padding:'80px 0',
};

function BusinessLogin(){

    return(
        <div>


        <Container maxWidth="xl"  style={userLoginStyle}>

            <BusinessLoginForm/>

        </Container >


        </div>
    );
}

export default BusinessLogin;