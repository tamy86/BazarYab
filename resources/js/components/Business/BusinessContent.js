import React from 'react';
import Container from '@material-ui/core/Container';
import BusinessContentText from '../SubComponents/business/BusinessContentText';
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

function BusinessContent(){
    return(
        <div>
            <BusinessHeader/>

        <Container maxWidth="xl"  style={divContentStyle}>
            <BusinessContentText/>
        </Container >

            <BusinessFooter/>
        </div>

    );
}

export default BusinessContent;
