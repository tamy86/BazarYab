import React from 'react';
import Container from '@material-ui/core/Container';
import BusinessCustomerReportTable from '../SubComponents/business/BusinessCustomerReportTable';
import BusinessHeader from '../Business/BusinessHeader';
import BusinessFooter from '../Business/BusinessFooter';



const divContentStyle={
    backgroundColor:'#fff',
    width:"100%",
    height:'100%',
    direction:'rtl',
    marginTop:'0px',
    // paddingTop:'50px',
    padding:'145px 0',
};

function BusinessCustomerReport() {
    return(
        <div>
            <BusinessHeader/>

        <Container style={divContentStyle}>
            <BusinessCustomerReportTable/>
        </Container>

            <BusinessFooter/>
        </div>
    );

}

export default BusinessCustomerReport;
