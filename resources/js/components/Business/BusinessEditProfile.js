import React from 'react';
import Container from '@material-ui/core/Container';
import BusinessEditProfileForm from '../SubComponents/business/BusinessEditProfileForm';
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

function BusinessEditProfile(){

    return(
        <div>
            <BusinessHeader/>
            <Container maxWidth="xl"  style={userLoginStyle}>

                <BusinessEditProfileForm/>

            </Container >

            <BusinessFooter/>
        </div>
    );
}

export default BusinessEditProfile;
