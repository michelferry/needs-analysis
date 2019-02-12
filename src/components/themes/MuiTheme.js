import { createMuiTheme } from '@material-ui/core/styles';

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#7451e9',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      //light: '#0066ff',
      main: '#7451e9',
      // dark: will be calculated from palette.secondary.main,
      //contrastText: '#ffcc00',
    },
    error: {
      //light: '#0066ff',
      main: '#c43a3a',
      // dark: will be calculated from palette.secondary.main,
      //contrastText: '#ffcc00',
    }
  },
});

export default MuiTheme;