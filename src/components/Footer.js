import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "../utility/themeIndex";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderTop: `1px solid ${theme.palette.divider}`,
    justifyContent: "center"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { progress } = props;

  return <Toolbar className={classes.toolbar}>{progress}</Toolbar>;
}
