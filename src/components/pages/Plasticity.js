import React, { useState, useEffect } from "react";
import { plasticityObj } from "../../utility/smallerObjs";
import {
  Paper,
  Button,
  Tab,
  Tabs,
  Typography,
  Slide,
  Divider
} from "../../utility/themeIndex";

const Plasticity = props => {
  const { step, outputStep, handleChange } = props;
  const [tabs, setTabs] = useState();
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };
  //obj: {descrip, answer}
  const [value, setValue] = useState();

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {Object.entries(plasticityObj.options).map((k, index) => (
        <Tab key={index} label={`${k[0]}`} onClick={() => setValue(k[1])} />
      ))}
    </Tabs>
  );

  const setButton = value && (
    <Button
      variant="outlined"
      size="large"
      value={value.answer}
      onClick={handleChange(value)}
    >
      Set moisture
    </Button>
  );

  return (
    <Slide direction="right" in={step === 5}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{plasticityObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="h6">{plasticityObj.descrip}</Typography>
        {optionsTabs}
        <Typography variant="body1">{value && value.descrip}</Typography>
        {setButton}
      </Paper>
    </Slide>
  );
};

export default Plasticity;
