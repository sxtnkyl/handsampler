import React from "react";
import {
  Paper,
  TextField,
  Typography,
  Slide,
  Divider,
} from "../../utility/themeIndex";

const StratName = (props) => {
  const { step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 10}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">
          If you have identified the name of the stratigraphic unit, or have a
          custom name, enter it below.
        </Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">
          Remember, try to use USGS noomenclature when possible, or assign a
          site-specific custom name which accurately reflects the depositional
          environment or notable features.
        </Typography>
        <TextField
          variant="filled"
          multiline={true}
          rows="6"
          placeholder="Change Strat Name"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default StratName;
