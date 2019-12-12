import React from "react";
import { Paper, TextField, Slide } from "../../utility/themeIndex";

const StratName = props => {
  const { card, step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 10}>
      <Paper className={card}>
        <TextField
          placeholder="change StratName"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default StratName;
