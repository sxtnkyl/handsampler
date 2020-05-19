import React, { useState } from "react";
import { stratContactObj } from "../../utility/smallerObjs";
import {
  Paper,
  Typography,
  Button,
  Tabs,
  Tab,
  Slide,
} from "../../utility/themeIndex";

const StratContact = (props) => {
  const { step, handleChange } = props;
  const [tabs, setTabs] = useState();
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };
  //obj: {descrip, answer}
  const [value, setValue] = useState();

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {stratContactObj.options.map((k, index) => (
        <Tab key={index} label={k.name} onClick={() => setValue(k)} />
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
    <Slide direction="right" in={step === 11}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{stratContactObj.question}</Typography>
        <Typography variant="h6">{stratContactObj.descrip}</Typography>
        {optionsTabs}
        <Typography variant="body1">{value && value.descrip}</Typography>
        {setButton}
      </Paper>
    </Slide>
  );
};

export default StratContact;
