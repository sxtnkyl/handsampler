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
} from "../../utility/themeIndex";

const Moisture = (props) => {
  const { step, handleChange } = props;

  const [tabs, setTabs] = useState();
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };
  //obj: {descrip, id}
  const [value, setValue] = useState();

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {moistureObj.options.map((k, index) => (
        <Tab key={index} label={`${k.id}`} onClick={() => setValue(index)} />
      ))}
    </Tabs>
  );

  const displayDescrip = tabs >= 0 && (
    <Typography variant="body1">{moistureObj.options[tabs].descrip}</Typography>
  );

  const setButton = tabs >= 0 && (
    <Button
      value={value.id}
      variant="outlined"
      size="large"
      onClick={handleChange(value)}
    >
      Set moisture
    </Button>
  );

  return (
    <Slide direction="right" in={step === 4}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{moistureObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="h6">{moistureObj.descrip}</Typography>
        {optionsTabs}
        {displayDescrip}
        {setButton}
      </Paper>
    </Slide>
  );
};

export default Moisture;
