import React from "react";
import { Paper, TextField, Slide } from "../../utility/themeIndex";

const Plasticity = props => {
  const { card, step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 5}>
      <Paper className={card}>
        <TextField
          placeholder="change Plasticity"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default Plasticity;
