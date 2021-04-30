import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#edcd1f'
        },
        background: {
            default: "#ffffff"
        },
        secondary: {
            main: "#1e2d3b"
        },
    },
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        allVariants : {
            color: "#000000" 
        },
    },
}
)

export default theme;