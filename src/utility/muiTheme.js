import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
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

let theme = createMuiTheme({
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
    //h3: card titles
    h3: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "1.75rem",
        marginBottom: defaultTheme.spacing(1),
      },
      height: "20%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "800",
      color: defaultTheme.palette.secondary.dark,
    },
    //grain size answer/end
    h4: {
      color: defaultTheme.palette.secondary.dark,
      fontWeight: "600",
    },
    //h5: header/card tabs
    h5: {
      color: defaultTheme.palette.secondary.contrastText,
    },
    //h6: currentTabDescrips
    h6: {
      marginTop: defaultTheme.spacing(3),
      marginBottom: defaultTheme.spacing(3),
      fontWeight: 550,
    },
    //typography within button
    button: {
      fontWeight: 550,
      color: "inherit",
      paddingLeft: defaultTheme.spacing(1),
      paddingRight: defaultTheme.spacing(1),
    },
    //weathering descrips
    body1: {
      display: "flex",
      alignItems: "center",
    },
    //subt1: question descrip
    subtitle1: {
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "0.75rem",
        marginTop: defaultTheme.spacing(1),
        marginBottom: defaultTheme.spacing(1),
      },
      marginTop: defaultTheme.spacing(3),
      marginBottom: defaultTheme.spacing(3),
      color: defaultTheme.palette.secondary.main,
      fontStyle: "italic",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        [defaultTheme.breakpoints.down("sm")]: {
          paddingBottom: defaultTheme.spacing(0),
        },
        paddingBottom: defaultTheme.spacing(1),
      },
    },
    MuiButton: {
      //header- oulined/medium
      root: {
        minWidth: "32px",
      },
      outlined: {
        [defaultTheme.breakpoints.down("sm")]: {
          padding: defaultTheme.spacing(0),
        },
        color: defaultTheme.palette.secondary.contrastText,
        padding: defaultTheme.spacing(1),
        marginLeft: defaultTheme.spacing(1),
        borderColor: defaultTheme.palette.secondary.contrastText,
        "&:hover": {
          borderWidth: "3px",
          borderColor: defaultTheme.palette.primary.dark,
          backgroundColor: defaultTheme.palette.primary.light,
        },
      },
      //contained: footer nav buttons
      contained: {
        [defaultTheme.breakpoints.down("sm")]: {
          padding: "0px",
        },
        color: defaultTheme.palette.secondary.contrastText,
        backgroundColor: defaultTheme.palette.secondary.dark,
        "&:hover": {
          backgroundColor: defaultTheme.palette.secondary.light,
        },
        "&$disabled": {
          color: defaultTheme.palette.secondary.light,
        },
      },
      //submit answer button
      containedSizeSmall: {
        [defaultTheme.breakpoints.down("xs")]: {
          width: "70%",
        },
        width: "30%",
        alignSelf: "center",
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
        [defaultTheme.breakpoints.down("sm")]: {
          padding: "0px",
        },
        flex: "1",
        display: "flex",
        flexDirection: "column",
        marginBottom: defaultTheme.spacing(3),
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        [defaultTheme.breakpoints.down("sm")]: {
          width: "75vw",
        },
        width: "25vw",
        background: defaultTheme.palette.secondary.dark,
        color: defaultTheme.palette.secondary.contrastText,
        borderRight: `2px solid ${defaultTheme.palette.secondary.contrastText}`,
      },
    },
    MuiListItem: {
      root: {
        padding: defaultTheme.spacing(0),
        width: "auto",
      },
      button: {
        borderBottom: `1px solid ${defaultTheme.palette.secondary.light}`,
        "&:hover": {
          backgroundColor: defaultTheme.palette.secondary.light,
        },
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
        [defaultTheme.breakpoints.down("sm")]: {
          width: "100%",
          padding: `${defaultTheme.spacing(0)}px ${defaultTheme.spacing(1)}px`,
          borderRadius: "0px",
          marginBottom: defaultTheme.spacing(0),
          marginTop: defaultTheme.spacing(0),
        },
        [defaultTheme.breakpoints.up("md")]: {
          width: "80%",
          padding: `${defaultTheme.spacing(3)}px ${defaultTheme.spacing(3)}px`,
        },
        [defaultTheme.breakpoints.up("lg")]: {
          width: "70%",
          padding: `${defaultTheme.spacing(3)}px ${defaultTheme.spacing(6)}px`,
        },
        color: defaultTheme.palette.secondary.dark,
        background: defaultTheme.palette.primary.main,
        alignSelf: "center",
        textAlign: "center",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        marginTop: defaultTheme.spacing(3),
        marginBottom: defaultTheme.spacing(3),
        boxShadow: `10px 10px 10px ${defaultTheme.palette.secondary.dark}, -10px -10px 10px ${defaultTheme.palette.secondary.dark}`,
      },
    },
    MuiDivider: {
      root: {
        [defaultTheme.breakpoints.down("sm")]: {
          marginTop: defaultTheme.spacing(1),
          marginBottom: defaultTheme.spacing(1),
        },
        marginTop: defaultTheme.spacing(3),
        marginBottom: defaultTheme.spacing(3),
      },
    },
    MuiTabs: {
      root: {
        color: defaultTheme.palette.secondary.light,
        marginBottom: defaultTheme.spacing(3),
        "& .MuiTab-textColorInherit.Mui-selected": {
          color: defaultTheme.palette.secondary.main,
        },
      },
      indicator: {
        color: defaultTheme.palette.secondary.dark,
      },
    },
    MuiTab: {
      root: {
        marginLeft: defaultTheme.spacing(1),
        marginRight: defaultTheme.spacing(1),
      },
      wrapper: {
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: defaultTheme.typography.body1.fontSize,
        },
        fontSize: defaultTheme.typography.h5.fontSize,
        fontWeight: "600",
      },
    },
    MuiTextField: {
      root: {
        [defaultTheme.breakpoints.down("sm")]: {
          width: "90%",
        },
        marginTop: defaultTheme.spacing(3),
        width: "70%",
        alignSelf: "center",
        margin: defaultTheme.spacing(3),
      },
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
        margin: defaultTheme.spacing(0),
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: defaultTheme.typography.subtitle1.fontSize,
      },
    },
    MuiMobileStepper: {
      root: {
        width: "100%",
        height: "100%",
        paddingLeft: defaultTheme.spacing(2),
        paddingRight: defaultTheme.spacing(2),
      },
      dot: {
        [defaultTheme.breakpoints.down("sm")]: {
          transform: "scale(0)",
          margin: "0px 0px",
        },
        transform: "scale(1.5)",
        margin: "0px 8px",
      },
    },
    MuiSvgIcon: {
      root: {
        color: "inherit",
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
