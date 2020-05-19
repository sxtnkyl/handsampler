import React from "react";
import {
  Paper,
  TextField,
  Slide,
  Typography,
  Divider,
} from "../../utility/themeIndex";

const Color = (props) => {
  const { step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 2}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">
          Enter the colors that best represents the sample.
        </Typography>
        <Divider variant="middle" />
        <TextField
          variant="filled"
          multiline={true}
          rows="6"
          placeholder="Type all present Munsell scale colors from most to least prevalent"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default Color;
