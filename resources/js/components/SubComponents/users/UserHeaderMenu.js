import React from 'react';
import {createMuiTheme, makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CloseIcon from '@material-ui/icons/Close';
import {ThemeProvider} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";

import UserProfileCircleMenu from '../users/UserProfileCircleMenu';


const drawerWidth = 240;

// const profileLoginCircle={
// position: 'fixed',
// color:'#001a33',
// backgroundColor:'#f0f1f4',
// };

const listtheme = createMuiTheme({
    overrides: {

        MuiListItemText: { // Name of the component ⚛️ / style sheet
            primary:{ // Name of the rule
                fontFamily:'IRANSans',
            }
        }
    }
});



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        position:'fixed',
        width:'100%',
        zIndex:'1',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,

    },
    hide: {
        display: 'none',

    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        direction: 'rtl',
        float:'right',
        right:'0px',



    },
    drawerPaper: {
        width: drawerWidth,
        float:'right',
        background:'#eceff1',



    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',

        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,

        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,

        }),
        marginRight: -drawerWidth,


    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,


    },
    list:{

        textAlign:'right',
        float:'right',
    },



}));


const linkstyle= {
    color:'#0e0e0e',
    textDecoration:'none',
    display:'contents'
};



function UserHeaderMenu() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                style={{height:'65px',backgroundColor:'#00BFFF'}}
                position="fixed"
            >
                <Toolbar>
                    <Typography className={classes.title} variant="h6" color="inherit">
                        <UserProfileCircleMenu/>
                    </Typography>
                    <IconButton
                        color="black"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>



                </Toolbar>

            </AppBar>

            <ThemeProvider theme={listtheme}>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <CloseIcon/> : <CloseIcon/>}

                        </IconButton>
                    </div>
                    <Divider />


                    <List>

                        <Link style={linkstyle} to='/user/home'>
                        <ListItem button key={'صفحه نخست'} className={classes.list}>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText  primary={'صفحه نخست'}/>
                        </ListItem>
                        </Link>

                        <Link style={linkstyle} to='/user/businessreport' >
                        <ListItem button key={'گزارش کسب و کارها'} className={classes.list}>
                            <ListItemIcon><StoreIcon/></ListItemIcon>
                            <ListItemText  primary={'گزارش کسب و کارها'}/>
                        </ListItem>
                        </Link>


                        <Link style={linkstyle} to='/user/discountsreport'>
                        <ListItem button key={'گزارش تخفیف ها'} className={classes.list}>
                            <ListItemIcon><ListAltIcon/></ListItemIcon>
                            <ListItemText  primary={'گزارش تخفیف ها'}/>
                        </ListItem>
                        </Link>


                    </List>
                    <Divider />


                    <List>
                        <Link style={linkstyle} to='/user/editprofile'>
                        <ListItem button key={'ویرایش پروفایل'} className={classes.list}>
                            <ListItemIcon><PersonIcon/></ListItemIcon>
                            <ListItemText  primary={'ویرایش پروفایل'}/>
                        </ListItem>
                        </Link>
                    </List>
                </Drawer>

            </ThemeProvider>
        </div>
    );
}

export default UserHeaderMenu;
