import React from 'react';
import HomeContentText from '../SubComponents/home/HomeContentText';
import Container from '@material-ui/core/Container';
import HomeHeaderButtonLogin from '../SubComponents/home/HomeHeaderButtonLogin';
import HomeFooter from "./HomeFooter";

const divContentStyle={
    backgroundColor:'#fff',
    width:"100%",
    height:'100%',
    direction:'rtl',
    marginTop:'0px',
    padding:'145px 0',
};

function HomeContent(){

    return(
        <div>
        <HomeHeaderButtonLogin/>
        <Container maxWidth="xl"  style={divContentStyle}>
        <HomeContentText/>
        </Container >

            <HomeFooter/>

        </div>
    );
}

export default HomeContent;