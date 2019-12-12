import React from "react";
import { Paper, TextField, Slide } from "../../utility/themeIndex";

const Color = props => {
  const { card, step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 2}>
      <Paper className={card}>
        <TextField
          placeholder="change color"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default Color;
