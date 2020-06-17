import React, { useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Slide,
  Divider,
  Button,
  Container,
} from "../../utility/themeIndex";

const DepositionalEnv = (props) => {
  const { step, outputStep, handleChange } = props;

  const [value, setValue] = useState("");

  const handleTextFieldChange = (event) => {
    setValue(event.target.value);
  };

  const pickEnv = (
    <Container>
      <Typography variant="subtitle1">
        *future version will add a dropdown component of various environments to
        insert into textbox
      </Typography>
      <TextField
        variant="filled"
        multiline={true}
        rows="6"
        placeholder="Change Depositional Environment"
        label={outputStep.output}
        onChange={handleTextFieldChange}
        defaultValue={outputStep.output}
      />
    </Container>
  );

  const submitEnv = (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      <Typography variant="button">Submit Environment</Typography>
    </Button>
  );

  return (
    <Slide direction="right" in={step === 9}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">
          If you have deduced the depositional environment, enter in below.
        </Typography>
        <Divider variant="middle" />
        <Container>
          {pickEnv}
          {submitEnv}
        </Container>
      </Paper>
    </Slide>
  );
};

export default DepositionalEnv;
