import React from "react";
import { Paper, TextField, Slide } from "../../utility/themeIndex";

const Weathering = props => {
  const { card, step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 8}>
      <Paper className={card}>
        <TextField
          placeholder="change Weathering"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default Weathering;
