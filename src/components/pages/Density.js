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

  const nRadios = tabs !== false && (
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
        <Tooltip title={densityObj.nValue} placement="bottom">
          <Typography variant="subtitle1">{densityObj.descrip}</Typography>
        </Tooltip>
        {optionsTabs}
        {nRadios}
      </Paper>
    </Slide>
  );
};

export default Density;
