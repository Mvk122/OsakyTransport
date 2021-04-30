import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#652D90'
        },
        background: {
            default: "#ffffff"
        },
        secondary: {
            main: "#00A551"
        },
        tertiary: {
            main: "#00ADEE"
        }
    },
    typography: {
        "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        allVariants : {
            color: "#652D90" 
        },
    },
}
)

export default theme;