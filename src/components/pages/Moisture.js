import React, { useState } from "react";
import { moistureObj } from "../../utility/smallerObjs";
import {
  Paper,
  Button,
  Slide,
  Typography,
  Divider,
  Tab,
  Tabs,
  Card,
} from "../../utility/themeIndex";

const Moisture = (props) => {
  const { step, handleChange } = props;

  const [tabs, setTabs] = useState(false);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  let value = tabs !== false && moistureObj.options[tabs].id;

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {moistureObj.options.map((k, index) => (
        <Tab key={index} label={`${k.id}`} />
      ))}
    </Tabs>
  );

  const currentDescrip = tabs !== false && (
    <Typography variant="h6">{moistureObj.options[tabs].descrip}</Typography>
  );

  const submitMoisture = tabs !== false && (
    <Button
      value={value}
      variant="contained"
      size="small"
      onClick={handleChange(value)}
    >
      Submit moisture
    </Button>
  );

  return (
    <Slide direction="right" in={step === 4}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{moistureObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">{moistureObj.descrip}</Typography>
        <Divider variant="middle" />
        {optionsTabs}
        {currentDescrip}
        {submitMoisture}
      </Paper>
    </Slide>
  );
};

export default Moisture;
