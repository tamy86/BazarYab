import React from 'react';
import Container from '@material-ui/core/Container';
import UserLoginForm from '../SubComponents/users/UserLoginForm';

const userLoginStyle={
    backgroundColor:'#fff',
    width:"100%",
    height:'100%',
    direction:'rtl',
    marginTop:'0px',
    paddingTop:'50px',
    padding:'80px 0',
};

function UserLogin(){

    return(
        <div>

        <Container maxWidth="xl"  style={userLoginStyle}>

            <UserLoginForm/>

        </Container >

        </div>
    );
}

export default UserLogin;