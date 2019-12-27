import React from "react";
import { makeStyles, Typography, Paper, Slide } from "../../utility/themeIndex";

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "center",
    paddingTop: theme.spacing(4)
  }
}));

const Begin = props => {
  const classes = useStyles();
  const { card, step } = props;

  return (
    <Slide direction="right" in={step === 0}>
      <Paper className={`${classes.paper} ${card}`}>
        <Typography variant="h2">Let's make a sample!</Typography>
        <Typography variant="h6">
          Answer each question and receive the resulting output.
        </Typography>
        <Typography variant="h6">
          You can produce the output early by clicking the Finish button.
        </Typography>
      </Paper>
    </Slide>
  );
};

export default Begin;
