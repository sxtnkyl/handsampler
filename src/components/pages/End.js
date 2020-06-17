import React from "react";
import {
  Paper,
  makeStyles,
  Slide,
  Typography,
  Divider,
} from "../../utility/themeIndex";

const useStyles = makeStyles((theme) => ({
  expand: {
    flex: 1,
    textAlign: "center",
    background: theme.palette.primary.main,
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(6),
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const End = (props) => {
  const classes = useStyles();
  const { step, generateAnswer, answer } = props;

  generateAnswer();

  //add dropdown to nevigate back to a step
  //clicking on individual descriptor navs to that question

  //add option to manually edit output answer

  return (
    <Slide direction="right" in={step === 12}>
      <Paper className={classes.expand}>
        <Typography variant="h4" className={classes.header}>
          Your sample description is:
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h3" style={{ alignSelf: "center" }}>
          {answer}
        </Typography>
      </Paper>
    </Slide>
  );
};

export default End;
