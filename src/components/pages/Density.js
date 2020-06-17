import React, { useState } from "react";
import { densityObj } from "../../utility/smallerObjs";
import {
  Paper,
  Typography,
  Slide,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Divider,
  Radio,
  Tabs,
  Tab,
  Tooltip,
  Button,
  Container,
} from "../../utility/themeIndex";

const Density = (props) => {
  const { step, handleChange } = props;

  const [tabs, setTabs] = useState(false);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };
  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {densityObj.options.map((k, index) => (
        <Tab key={index} label={`${k.id}`} onClick={() => setTabs(index)} />
      ))}
    </Tabs>
  );

  const [value, setValue] = useState("");
  const handleRadioSelect = (e) => {
    setValue(e.target.value);
  };

  //https://stackoverflow.com/questions/42522515/what-are-react-controlled-components-and-uncontrolled-components
  const nRadios = tabs !== false && (
    <Container>
      <FormControl component="fieldset">
        <RadioGroup
          style={{ justifyContent: "space-evenly" }}
          row
          aria-label="n-value"
          name="density"
          value={value}
          onChange={handleRadioSelect}
        >
          {densityObj.options[tabs].values.map((e) => (
            <FormControlLabel
              key={e.descrip}
              value={`${e.descrip}(${e.n}n)`}
              control={<Radio />}
              label={
                <Typography variant="button">
                  {e.n}: {e.descrip}
                </Typography>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Container>
  );

  const submitDensity = tabs !== false && (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      <Typography variant="button">Submit Density</Typography>
    </Button>
  );

  return (
    <Slide direction="right" in={step === 3}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{densityObj.question}</Typography>
        <Divider variant="middle" />
        <Container>
          <Tooltip title={densityObj.nValue} placement="bottom">
            <Typography variant="subtitle1">{densityObj.descrip}</Typography>
          </Tooltip>
          {optionsTabs}
          {nRadios}
          {submitDensity}
        </Container>
      </Paper>
    </Slide>
  );
};

export default Density;