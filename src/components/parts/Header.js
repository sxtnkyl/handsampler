import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  MenuIcon,
  Button,
  RotateLeftRounded,
  DoneRounded,
} from "../../utility/themeIndex";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  menu: {
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
    },
    color: theme.palette.secondary.contrastText,
    marginRight: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const Header = (props) => {
  const matches = useMediaQuery("(min-width:920px)");
  const classes = useStyles();
  const { toggleDrawer, title, handleReset, disableButton, toFinish } = props;

  const resetButton = (
    <Button onClick={handleReset} variant="outlined" size="medium">
      <RotateLeftRounded />
      {matches && (
        <Typography variant="button" query="(max-device-width: 960px)">
          Restart
        </Typography>
      )}
    </Button>
  );
  const finishButton = (
    <Button
      onClick={toFinish}
      variant="outlined"
      size="medium"
      disabled={disableButton}
    >
      <DoneRounded />
      {matches && <Typography variant="button">Finish</Typography>}
    </Button>
  );

  return (
    <AppBar position="static" elevation={9}>
      <Toolbar>
        <IconButton
          className={classes.menu}
          onClick={toggleDrawer}
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography style={{ flex: 1 }} variant="h5">
          {title}
        </Typography>
        {resetButton}
        {finishButton}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
