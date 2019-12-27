import React from "react";
import { Paper, TextField, Slide } from "../../utility/themeIndex";

const End = props => {
  const { card, step, outputStep, handleChange } = props;

  //generate answer, compile output from formCompiler

  //add dropdown to nevigate back to a step
  //clicking on individual descriptor navs to that question

  //add option to manually edit output answer

  return (
    <Slide direction="right" in={step === 12}>
      <Paper className={card}>
        <TextField
          placeholder="change End"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default End;