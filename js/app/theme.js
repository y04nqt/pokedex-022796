import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: red[700],
            contrastText: '#fff'
        }
    }
})