import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from "react-router-dom";
import Link from '@material-ui/core/Link';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//Imports for the drawer
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ListItemIcon } from '@material-ui/core';

import Logo from '../img/Logo.png';


const useStyles = makeStyles((theme) => ({
    header: {
        color: "#ffffff",
        background: theme.palette.secondary.main,
        width: "100%",
        display: 'flex'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 700,
    },
    drawerlist: {
        width: 300
    },
    drawertheme: {
        background: theme.palette.secondary.main
    },
    dividertheme: {
        background: theme.palette.primary.main
    },
    appbaricon: {
        width: "7%",
        color: theme.palette.secondary.main
    },
    appButton: {
        [theme.breakpoints.down('xs')]: { display: 'none', }
    },
    logo: {
        [theme.breakpoints.down('xs')]: {
            width: "10em"
        },
        [theme.breakpoints.up('sm')]: { 
            paddingLeft: theme.spacing(4),
            width: "15%"
        }
    },
    listtext: {
        color: "#ffffff"
    }
}))

const HeaderAppBar = props => {
    const classes = useStyles();
    const [draweropen, setDraweropen] = useState(false);
    const history = useHistory();
    function AppDrawer(){
        return (
            <React.Fragment>
                <Drawer open={draweropen} anchor="left" onClose={()=> setDraweropen(false)} variant="temporary" classes={{paper: classes.drawertheme}}>
                    <div className={classes.drawerlist}>
                        <List>
                            <ListItem button onClick={()=> history.push("/")}>
                                <ListItemIcon><img src={Logo} className={classes.appbaricon} alt="home" /></ListItemIcon>
                            </ListItem>
                            <Divider className={classes.dividertheme} variant="middle"/>
                            <ListItem button onClick={()=> history.push("/")}>
                                <ListItemText primaryTypographyProps={{ style: {color:"#ffffff"}}} primary="HOME"></ListItemText>
                            </ListItem>
                            <ListItem button onClick={()=> history.push("/services")}>
                                <ListItemText primaryTypographyProps={{ style: {color:"#ffffff"}}} primary="SERVICES"></ListItemText>
                            </ListItem>                      
                            <ListItem button>
                                <ListItemText primaryTypographyProps={{ style: {color:"#ffffff"}}} primary="ABOUT" onClick={() => history.push("/about")}></ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primaryTypographyProps={{ style: {color:"#ffffff"}}} primary="PROJECTS" onClick={() => history.push("/projects")}></ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemText primaryTypographyProps={{ style: {color:"#ffffff"}}} primary="CLIENTS" onClick={() => history.push("/clients")}></ListItemText>
                            </ListItem>                                                                                    
                            <ListItem button onClick={() => history.push("/contact")}>
                                <ListItemText primaryTypographyProps={{ style: {color:"#ffffff"}}} primary="CONTACT US"></ListItemText>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </React.Fragment>
        )
    }

    return (
        <AppBar position="static" className={classes.header}>
            <AppDrawer />
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu" onClick={() => setDraweropen(true)}>
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <img src={Logo} className={classes.logo} alt="Osaky Logo"/>
                </Link>
                <div style={{ display:'flex', marginRight:0, marginLeft:"auto"}}>
                    <Button color="inherit" className={classes.appButton} onClick={()=> history.push("/")}>HOME</Button>
                    <Button color="inherit" className={classes.appButton} onClick={() => history.push("/services")}>SERVICES</Button>
                    <Button color="inherit" className={classes.appButton} onClick={() => history.push("/about")}>ABOUT</Button>
                    <Button color="inherit" className={classes.appButton} onClick={() => history.push("/about")}>PROJECTS</Button>
                    <Button color="inherit" className={classes.appButton} onClick={() => history.push("/about")}>CLIENTS</Button>
                    <Button color="inherit" className={classes.appButton} onClick={()=> history.push("/contact")}>CONTACT</Button>
                </div>
                </Toolbar>
        </AppBar>
    )
}

export default HeaderAppBar;