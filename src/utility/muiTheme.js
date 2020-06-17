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
    //h3: card titles
    h3: {
      height: "20%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: "normal",
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
      marginTop: defaultTheme.spacing(3),
      marginBottom: defaultTheme.spacing(3),
      color: defaultTheme.palette.secondary.main,
      fontStyle: "italic",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        paddingBottom: defaultTheme.spacing(1),
      },
    },
    MuiButton: {
      //header- oulined/medium
      outlined: {
        color: defaultTheme.palette.secondary.contrastText,
        padding: defaultTheme.spacing(1),
        margin: defaultTheme.spacing(1),
        borderColor: defaultTheme.palette.secondary.contrastText,
        "&:hover": {
          borderWidth: "3px",
          borderColor: defaultTheme.palette.primary.dark,
          backgroundColor: defaultTheme.palette.primary.light,
        },
      },
      //contained: footer nav buttons
      contained: {
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
        flex: "1",
        display: "flex",
        flexDirection: "column",
        marginBottom: defaultTheme.spacing(3),
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
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
        padding: `${defaultTheme.spacing(3)}px ${defaultTheme.spacing(6)}px`,
        boxShadow: `10px 10px 10px ${defaultTheme.palette.secondary.dark}, -10px -10px 10px ${defaultTheme.palette.secondary.dark}`,
      },
    },
    MuiDivider: {
      root: {
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
        fontSize: defaultTheme.typography.h5.fontSize,
        fontWeight: "600",
      },
    },
    MuiTextField: {
      root: {
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
        paddingLeft: defaultTheme.spacing(3),
        paddingRight: defaultTheme.spacing(3),
      },
      dot: {
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

export default theme;
