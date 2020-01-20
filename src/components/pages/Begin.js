import React from "react";
import { Typography, Paper, Slide, Divider } from "../../utility/themeIndex";

const Begin = props => {
  const { step } = props;

  return (
    <Slide direction="right" in={step === 0}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">Let's make a sample!</Typography>
        <Divider variant="middle" />
        <Typography variant="h6">
          Answer each question to produce a sample description at the end of the
          survey.
        </Typography>
        <Typography variant="h6">
          You can produce the output early by clicking the Finish button.
        </Typography>
      </Paper>
    </Slide>
  );
};

export default Begin;
