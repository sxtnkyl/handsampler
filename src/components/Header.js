import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography } from "../utility/themeIndex";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { title, reset, finish } = props;

  return (
    <Toolbar className={classes.toolbar}>
      {reset}
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
      >
        {title}
      </Typography>
      {finish}
    </Toolbar>
  );
}
