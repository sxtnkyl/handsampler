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

const StratName = (props) => {
  const { step, outputStep, handleChange } = props;
  const [value, setValue] = useState("");

  const handleTextFieldChange = (event) => {
    setValue(event.target.value);
  };

  const pickStrat = (
    <Container>
      <Typography variant="subtitle1">
        *future version will add a dropdown component of various environments to
        insert into textbox
      </Typography>
      <TextField
        variant="filled"
        multiline={true}
        rows="6"
        placeholder="Change Stratigraphic Name"
        label={outputStep.output}
        onChange={handleTextFieldChange}
        defaultValue={outputStep.output}
      />
    </Container>
  );

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
          Can the Stratigraphic Name be deduced?
        </Typography>
        <Divider variant="middle" />
        <Container>
          {pickStrat}
          {submitName}
        </Container>
      </Paper>
    </Slide>
  );
};

export default StratName;
