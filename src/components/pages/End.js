import React from "react";
import { Paper, makeStyles, Slide, Typography } from "../../utility/themeIndex";

const useStyles = makeStyles(theme => ({
  expand: {
    flex: 1,
    textAlign: "center"
  },
  contrast: {
    color: theme.palette.secondary.contrastText
  }
}));

const End = props => {
  const classes = useStyles();
  const { step, generateAnswer, answer } = props;

  generateAnswer();

  //add dropdown to nevigate back to a step
  //clicking on individual descriptor navs to that question

  //add option to manually edit output answer

  return (
    <Slide direction="right" in={step === 12}>
      <Paper className={classes.expand}>
        <Typography variant="h3">Your sample description is:</Typography>
        <Typography className={classes.contrast} variant="h3">
          {answer}
        </Typography>
      </Paper>
    </Slide>
  );
};

export default End;
