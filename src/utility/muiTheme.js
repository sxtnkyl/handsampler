import { createMuiTheme } from "@material-ui/core/styles";
import { green, blueGrey } from "@material-ui/core/colors";

//https://github.com/mui-org/material-ui/issues/6939

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: green["A700"],
      contrastText: blueGrey[800],
    },
    secondary: {
      main: blueGrey[800],
      contrastText: "#ffffff",
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: defaultTheme.palette.primary,
    secondary: defaultTheme.palette.secondary,
    background: {
      paper: defaultTheme.palette.secondary.light,
      default: defaultTheme.palette.secondary.main,
    },
  },
  spacing: defaultTheme.spacing,
  typography: {
    //h3: currentquestions
    h3: {
      fontWeight: "800",
      margin: defaultTheme.spacing(3),
    },
    //h5: appbar
    //h6:descrips
    h6: {
      marginTop: defaultTheme.spacing(3),
      marginBottom: defaultTheme.spacing(3),
    },
    //h4: tabs
    button: {
      fontWeight: 550,
    },
    //subtitle1: tab descrips
    body1: {
      marginTop: defaultTheme.spacing(3),
      marginBottom: defaultTheme.spacing(3),
    },
  },
  overrides: {
    MuiButton: {
      //outlined: appbar
      outlined: {
        padding: defaultTheme.spacing(1),
        margin: defaultTheme.spacing(1),
        borderColor: defaultTheme.palette.secondary.contrastText,
        "&:hover": {
          borderWidth: "3px",
          borderColor: defaultTheme.palette.primary.dark,
          backgroundColor: defaultTheme.palette.primary.light,
        },
      },
      //contained: bottom toolbar nav buttons
      contained: {
        backgroundColor: defaultTheme.palette.secondary.dark,
        color: defaultTheme.palette.secondary.contrastText,
        "&:hover": {
          backgroundColor: defaultTheme.palette.secondary.light,
        },
      },
      //text: subquestions in paper
      text: {
        width: "30%",
        alignSelf: "center",
        marginTop: defaultTheme.spacing(3),
        border: `solid 1px ${defaultTheme.palette.primary.contrastText}`,
      },
    },
    MuiContainer: {
      root: {
        padding: "0px !important",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
    },
    MuiAppBar: {
      root: {
        paddingBottom: defaultTheme.spacing(1),
      },
    },
    MuiToolbar: {
      root: {
        background: defaultTheme.palette.secondary.dark,
      },
    },
    MuiPaper: {
      //top appbar paper at elevation 9
      //target questions at 7
      elevation7: {
        color: defaultTheme.palette.secondary.dark,
        background: defaultTheme.palette.primary.main,
        width: "70%",
        alignSelf: "center",
        textAlign: "center",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginTop: defaultTheme.spacing(3),
        marginBottom: defaultTheme.spacing(3),
        paddingLeft: "8%",
        paddingRight: "8%",
        boxShadow: `10px 10px 10px ${defaultTheme.palette.secondary.dark}, -10px -10px 10px ${defaultTheme.palette.secondary.dark}`,
      },
    },
    MuiDivider: {
      root: {
        marginBottom: defaultTheme.spacing(1),
      },
    },
    MuiTabs: {
      root: {
        color: defaultTheme.palette.secondary.light,
        marginBottom: defaultTheme.spacing(3),
      },
      indicator: {
        color: defaultTheme.palette.primary.dark,
      },
    },
    MuiTextField: {
      root: { width: "70%", alignSelf: "center" },
    },
    MuiButtonGroup: {
      root: {
        marginTop: defaultTheme.spacing(3),
        marginBottom: defaultTheme.spacing(3),
        justifyContent: "center",
      },
    },
    MuiButtonBase: {
      root: {
        //change to 1 fixes mobilestepper
        margin: defaultTheme.spacing(1),
      },
    },
    MuiMobileStepper: {
      root: {
        width: "100%",
        height: "100%",
        paddingLeft: defaultTheme.spacing(3),
        paddingRight: defaultTheme.spacing(3),
      },
      dot: {
        transform: "scale(1.5)",
        margin: "3px 8px",
      },
    },
  },
});

export default theme;
