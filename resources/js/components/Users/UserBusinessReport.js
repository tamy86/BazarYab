import React from 'react';
import Container from '@material-ui/core/Container';
import UserBusinessReportTable from '../SubComponents/users/UserBusinessReportTable';

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

function UserBusinessReport() {
    return(
        <div>
        <UserHeader/>

        <Container style={divContentStyle}>
            <UserBusinessReportTable/>
        </Container>

            <UserFooter/>
        </div>
    );

}

export default UserBusinessReport;