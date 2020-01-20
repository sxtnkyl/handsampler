import React from "react";
import {
  Paper,
  TextField,
  Typography,
  Slide,
  Divider
} from "../../utility/themeIndex";

const DepositionalEnv = props => {
  const { step, outputStep, handleChange } = props;

  //add a dropdown component of various depenvs to choose from
  //selection in dropdown will add to textbox

  return (
    <Slide direction="right" in={step === 9}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">
          If you have deduced the depositional environment, enter in below.
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h6">
          Here are some common depositional descriptors.
        </Typography>
        <TextField
          variant="filled"
          multiline={true}
          rows="6"
          placeholder="change Depositional Environment"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default DepositionalEnv;
