import React from 'react';
import Container from '@material-ui/core/Container';
import BusinessNewCustomerForm from '../SubComponents/business/BusinessNewCustomerForm';
import BusinessHeader from '../Business/BusinessHeader';
import BusinessFooter from '../Business/BusinessFooter';


const userLoginStyle={
    backgroundColor:'#fff',
    width:"100%",
    height:'100%',
    direction:'rtl',
    marginTop:'0px',
    paddingTop:'50px',
    padding:'80px 0',
};

function BusinessNewCustomer(){

    return(
        <div>
            <BusinessHeader/>

        <Container maxWidth="xl"  style={userLoginStyle}>

            <BusinessNewCustomerForm/>

        </Container >

            <BusinessFooter/>

        </div>
    );
}

export default BusinessNewCustomer;