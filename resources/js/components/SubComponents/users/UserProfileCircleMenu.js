import React, {useEffect} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton/IconButton";
import PersonIcon from '@material-ui/icons/Person';
import {Redirect}  from 'react-router-dom';
import {Link} from "react-router-dom";
import axios from "axios";
import UserAlerts from "../users/UserAlertShow";



const profileLoginCircle={
    color:'#001a33',
    backgroundColor:'#f0f1f4',
};
const styleMenuItem={
    direction:'rtl',
    fontFamily:'IRANSans',

};

const linkstyle= {
    color:'#0e0e0e',
    textDecoration:'none',
    display:'contents'
};

const nameStyle={
    fontWeight:'bold',
    fontSize:'larger',
};



function UserProfileCircleMenu(){

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [name,setName]=React.useState('');
    const [family,setFamily]=React.useState('');
    const [errormessage,setErrormesasage]=React.useState('');
    const [showerror,setShowerror]=React.useState(false);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
   return <Redirect to='/user/home'/>
    };



    useEffect(()=> {


        const getNameFamilyUser=async ()=>{
            /*header config in app.js file so for all header need to check auth going and to check */
            try{
                const  res=  await axios.get('/api/user/getnamefamily');
                setName(res.data['name']);
                setFamily(res.data['family']);

            }
            catch(error){

                setErrormesasage(
                    {
                        msg: error.response.data['message'],
                        key: Math.random(),
                        errortype: error.response.data['message type'],
                    });
                setShowerror(true);
            }
        };
        getNameFamilyUser();
    },[setName,setFamily]);






    return(

        <div>

            {showerror ?
                <UserAlerts key={errormessage.key} errormessage={errormessage.msg} errortype={errormessage.errortype}/>:null
            }

            <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                style={profileLoginCircle}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <PersonIcon fontSize="large" />

            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}

            >
                <Link style={linkstyle} to='/business/editprofile'>
                    <MenuItem style={styleMenuItem}  onClick={handleClose}>
                        <li style={nameStyle}>{name} {family}</li>
                    </MenuItem>
                </Link>

                <Link style={linkstyle} to='/user/editprofile'>
                <MenuItem style={styleMenuItem}  onClick={handleClose}>ویرایش پروفایل</MenuItem>
                </Link>

                <Link style={linkstyle} to=''>
                <MenuItem style={styleMenuItem}  onClick={handleClose}>خروج</MenuItem>
                </Link>
            </Menu>
        </div>
    );
}

export default UserProfileCircleMenu;