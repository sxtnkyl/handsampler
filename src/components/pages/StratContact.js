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
  const [tabs, setTabs] = useState(false);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  let value = tabs !== false && stratContactObj.options[tabs].answer;

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {stratContactObj.options.map((k, index) => (
        <Tab key={index} label={k.name} />
      ))}
    </Tabs>
  );

  const currentDescrip = tabs !== false && (
    <Typography variant="h6">
      {stratContactObj.options[tabs].descrip}
    </Typography>
  );

  const setButton = tabs !== false && (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      Set Contact
    </Button>
  );

  return (
    <Slide direction="right" in={step === 11}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{stratContactObj.question}</Typography>
        <Typography variant="subtitle1">{stratContactObj.descrip}</Typography>
        {optionsTabs}
        {currentDescrip}
        {setButton}
      </Paper>
    </Slide>
  );
};

export default StratContact;
