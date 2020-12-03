import React from 'react';
import Container from '@material-ui/core/Container';
import UserDicountsReportTable from '../SubComponents/users/UserDiscountsReportTable';
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

function UserDiscountsReport() {
    return(
        <div>
        <UserHeader/>
        <Container style={divContentStyle}>
            <UserDicountsReportTable/>
        </Container>

        <UserFooter/>

        </div>

    );

}

export default UserDiscountsReport;