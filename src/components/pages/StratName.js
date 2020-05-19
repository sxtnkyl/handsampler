import React, { useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Slide,
  Divider,
  Button,
} from "../../utility/themeIndex";

const StratName = (props) => {
  const { step, outputStep, handleChange } = props;
  const [value, setValue] = useState("");

  const handleTextFieldChange = (event) => {
    setValue(event.target.value);
  };

  const submitName = (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      <Typography variant="button">Submit Strat Name</Typography>
    </Button>
  );

  return (
    <Slide direction="right" in={step === 10}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">
          If you have deduced the depositional environment, enter in below.
        </Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">
          *future version will add a dropdown component of various environments
          to insert into textbox
        </Typography>
        <Divider variant="middle" />
        <TextField
          variant="filled"
          multiline={true}
          rows="6"
          placeholder="Change Stratigraphic Name"
          label={outputStep.output}
          onChange={handleTextFieldChange}
          defaultValue={outputStep.output}
        />
        {submitName}
      </Paper>
    </Slide>
  );
};

export default StratName;
