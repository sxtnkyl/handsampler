import React from "react";
import { Paper, TextField, Typography, Slide } from "../../utility/themeIndex";

const StratName = props => {
  const { card, step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 10}>
      <Paper className={card}>
        <Typography variant="h3">
          If you have identified the name of the stratigraphic unit, or have a
          custom name, enter it below.
        </Typography>
        <Typography variant="h6">
          Remember, try to use USGS noomenclature when possible, or assign a
          site-specific custom name which accurately reflects the depositional
          environment or notable features.
        </Typography>
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
