import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    overrides: {
        MuiPaper: {
            root: {
                color: '#ffffff',
                backgroundColor: 'rgba(0,0,0,0.4)',
            },
            elevation4: {
                boxShadow: '0px',
            }
        },
        MuiAppBar: {
            colorPrimary: {
                color: '#ffffff',
                backgroundColor: 'rgba(0,0,0,0.4)',
            }
        },
        MuiListItemIcon: {
            root: {
                color: '#ffffff',
            }
        },
        MuiTableCell: {
            body: {
                color: '#ffffff',
            }
        }
    }
})