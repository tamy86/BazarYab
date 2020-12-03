import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton/IconButton";
import PersonIcon from '@material-ui/icons/Person';
import {Redirect}  from 'react-router-dom';
import {Link} from "react-router-dom";



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



function UserProfileCircleMenu(){

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
   return <Redirect to='/user/home'/>
    };

    return(

        <div>

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