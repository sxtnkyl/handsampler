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

const useStyles = makeStyles((theme) => ({
  fillType: {
    flex: 1,
    color: theme.palette.secondary.contrastText,
  },
  menu: {
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  icons: {
    color: theme.palette.secondary.contrastText,
    marginRight: theme.spacing(1),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { title, handleReset, disableButton, toFinish } = props;

  const resetButton = (
    <Button onClick={handleReset} variant="outlined" size="medium">
      <RotateLeftRounded className={classes.icons} />
      <Typography variant="button">Restart</Typography>
    </Button>
  );
  const finishButton = (
    <Button
      onClick={toFinish}
      variant="outlined"
      size="medium"
      disabled={disableButton}
    >
      <DoneRounded className={classes.icons} />
      <Typography variant="button">Finish</Typography>
    </Button>
  );

  return (
    <AppBar position="static" elevation={9}>
      <Toolbar>
        <IconButton className={classes.menu} edge="start" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.fillType} variant="h5">
          {title}
        </Typography>
        {resetButton}
        {finishButton}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
