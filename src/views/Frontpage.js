import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import HeaderAppBar from "../components/HeaderAppBar";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(0)
    },
}))

const Frontpage = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <HeaderAppBar />
            <h1>Hello world</h1>
        </div>
    )
}

export default Frontpage;