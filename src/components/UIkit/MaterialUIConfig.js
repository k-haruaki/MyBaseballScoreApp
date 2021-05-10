import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            elevation4: {
                boxShadow: '0px',
            }
        },
        MuiAppBar: {
            colorPrimary: {
                color: '#000000',
                backgroundColor: '#ffffff',
            }
        }
    }
})