import React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import LockOpenIcon from '@material-ui/icons/LockOpen';

const styleButton={
    backgroundColor:'#b7b1b1',
    borderRadius: 3,
    color: 'black',
    height: 48,
    padding: '0 1%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontFamily:'IRANSans',
    marginRight:'20px',
};

const linkstyle= {
    color:'#0e0e0e',
    textDecoration:'none',
    display:'contents'
};
const divHeaderStyle={
    backgroundColor:'#8ed1fc',
    width:'100%',
    height:'60px',
    direction:'rtl',
    paddingTop:'5px',
    paddingRight:'20px',

};

function HomeHeaderButtonLogin(){
    return(
<div>
        <AppBar style={divHeaderStyle}>
            <div>
                <Link style={linkstyle} to='user/login'>
                    <Button variant="outlined" color="primary" style={styleButton} to='/user/login'>
                        <LockOpenIcon/> وروود کاربر
                    </Button>
                </Link>

                <Link style={linkstyle} to='/business/login'>
                    <Button  variant="outlined" color="primary" style={styleButton}>
                        <LockOpenIcon/>  وروود کسب و کار
                    </Button>
                </Link>
            </div>
        </AppBar>
</div>

    );
}

export default HomeHeaderButtonLogin;