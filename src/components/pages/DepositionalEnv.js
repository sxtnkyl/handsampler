import React from "react";
import { Paper, TextField, Typography, Slide } from "../../utility/themeIndex";

const DepositionalEnv = props => {
  const { card, step, outputStep, handleChange } = props;

  //add a dropdown component of various depenvs to choose from
  //selection in dropdown will add to textbox

  return (
    <Slide direction="right" in={step === 9}>
      <Paper className={card}>
        <Typography variant="h3">
          If you have deduced the depositional environment, enter in below.
        </Typography>
        <Typography variant="h6">
          Here are some common depositional descriptors.
        </Typography>
        <TextField
          placeholder="change Depositional Environment"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default DepositionalEnv;
