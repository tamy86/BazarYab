import React from 'react';
import Container from '@material-ui/core/Container';
import UserContentText from '../SubComponents/users/UserContentText';
import UserHeader from '../Users/UserHeader';
import UserFooter from '../Users/UserFooter';


const divContentStyle={
    backgroundColor:'#fff',
    width:"100%",
    height:'100%',
    direction:'rtl',
    marginTop:'0px',
    // paddingTop:'50px',
    padding:'145px 0',
};

function UserContent(){
    return(
        <div>
            <UserHeader/>
        <Container maxWidth="xl"  style={divContentStyle}>
            <UserContentText/>
        </Container >
            <UserFooter/>
        </div>
    );
}

export default UserContent;