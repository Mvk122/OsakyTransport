import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Fab from '@material-ui/core/Fab';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
}));

function WAButton() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="add" size="large"  onClick={() => console.log("Open Whatsapp")} >
                <WhatsAppIcon style={{fontSize: "2.5em"}} />
            </Fab>
        </div>
    )
}

export default WAButton;