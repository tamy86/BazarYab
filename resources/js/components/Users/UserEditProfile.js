import React from 'react';
import Container from '@material-ui/core/Container';
import UserEditProfileForm from '../SubComponents/users/UserEditProfileForm';
import UserHeader from '../Users/UserHeader';
import UserFooter from '../Users/UserFooter';

const userLoginStyle={
    backgroundColor:'#fff',
    width:"100%",
    height:'100%',
    direction:'rtl',
    marginTop:'0px',
    paddingTop:'50px',
    padding:'80px 0',
};

function UserEditProfile(){

    return(
        <div>
            <UserHeader/>
        <Container maxWidth="xl"  style={userLoginStyle}>

            <UserEditProfileForm/>

        </Container >

            <UserFooter/>
        </div>
    );
}

export default UserEditProfile;