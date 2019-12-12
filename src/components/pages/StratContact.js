import React from "react";
import { Paper, TextField, Slide } from "../../utility/themeIndex";

const StratContact = props => {
  const { card, step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 11}>
      <Paper className={card}>
        <TextField
          placeholder="change StratContact"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default StratContact;
