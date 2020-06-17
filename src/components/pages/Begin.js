import React from "react";
import { Typography, Paper, Slide } from "../../utility/themeIndex";

const Begin = (props) => {
  const { step } = props;

  return (
    <Slide direction="right" in={step === 0}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">
          Welcome to the Hand Sample Generator!
        </Typography>
        <Typography variant="h6" style={{ flex: "0" }}>
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
