import React, { useState } from "react";
import { plasticityObj } from "../../utility/smallerObjs";
import {
  Paper,
  Button,
  Tab,
  Tabs,
  Typography,
  Slide,
  Divider,
} from "../../utility/themeIndex";

const Plasticity = (props) => {
  const { step, handleChange } = props;
  const [tabs, setTabs] = useState(false);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  let value = tabs !== false && plasticityObj.options[tabs].answer;

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {plasticityObj.options.map((k, index) => (
        <Tab key={index} label={`${k.id}`} />
      ))}
    </Tabs>
  );

  const currentDescrip = tabs !== false && (
    <Typography variant="h6">{plasticityObj.options[tabs].descrip}</Typography>
  );

  const setButton = value && (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      Set Plasticity
    </Button>
  );

  return (
    <Slide direction="right" in={step === 5}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{plasticityObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">{plasticityObj.descrip}</Typography>
        {optionsTabs}
        {currentDescrip}
        {setButton}
      </Paper>
    </Slide>
  );
};

export default Plasticity;
