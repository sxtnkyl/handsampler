import React, { useState } from "react";
import {
  Paper,
  TextField,
  Slide,
  Typography,
  Divider,
  Button,
} from "../../utility/themeIndex";

const Color = (props) => {
  const { step, outputStep, handleChange } = props;

  const [value, setValue] = useState("");

  const handleTextFieldChange = (event) => {
    setValue(event.target.value);
  };

  const submitColors = (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      <Typography variant="button">Submit Colors</Typography>
    </Button>
  );

  return (
    <Slide direction="right" in={step === 2}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">
          Enter the colors that best represents the sample.
        </Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">
          *future version will have color selector
        </Typography>
        <Divider variant="middle" />
        <TextField
          variant="filled"
          multiline={true}
          rows="6"
          placeholder="Type all present Munsell scale colors from most to least prevalent"
          label={outputStep.output}
          onChange={handleTextFieldChange}
          defaultValue={outputStep.output}
        />
        {submitColors}
      </Paper>
    </Slide>
  );
};

export default Color;
