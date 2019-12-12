import React from "react";
import { Paper, TextField, Slide } from "../../utility/themeIndex";

const Moisture = props => {
  const { card, step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 4}>
      <Paper className={card}>
        <TextField
          placeholder="change Moisture"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default Moisture;
