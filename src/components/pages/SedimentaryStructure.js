import React from "react";
import { Paper, TextField, Slide } from "../../utility/themeIndex";

const SedimentaryStructure = props => {
  const { card, step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 7}>
      <Paper className={card}>
        <TextField
          placeholder="change SedimentaryStructure"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default SedimentaryStructure;
