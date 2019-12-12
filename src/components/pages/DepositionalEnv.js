import React from "react";
import { Paper, TextField, Slide } from "../../utility/themeIndex";

const DepositionalEnv = props => {
  const { card, step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 9}>
      <Paper className={card}>
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
