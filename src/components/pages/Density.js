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
} from "../../utility/themeIndex";

const Density = (props) => {
  const { step, handleChange } = props;

  const [value, setValue] = useState("");

  const [tabs, setTabs] = useState();
  const handleTabs = (e, newtab) => {
    console.log(newtab, densityObj.options[newtab].values);
    setTabs(newtab);
  };
  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {densityObj.options.map((k, index) => (
        <Tab key={index} label={`${k.id}`} onClick={() => setTabs(index)} />
      ))}
    </Tabs>
  );

  const nRadios = tabs >= 0 && (
    <FormControl component="fieldset">
      <RadioGroup
        style={{ justifyContent: "center" }}
        row
        aria-label="n-value"
        name="density"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {densityObj.options[tabs].values.map((e) => (
          <FormControlLabel
            key={e.descrip}
            value={e.descrip}
            control={<Radio />}
            label={`${e.n}: ${e.descrip}`}
            onClick={handleChange(value)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
  return (
    <Slide direction="right" in={step === 3}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{densityObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="h6">{densityObj.descrip}</Typography>
        {optionsTabs}
        {nRadios}
      </Paper>
    </Slide>
  );
};

export default Density;
