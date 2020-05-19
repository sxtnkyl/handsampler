import React, { useState } from "react";
import { cohesivenessObj } from "../../utility/smallerObjs";
import {
  Divider,
  Paper,
  Button,
  Typography,
  Tab,
  Tabs,
  Slide,
} from "../../utility/themeIndex";

const Cohesiveness = (props) => {
  const { step, handleChange } = props;

  const [tabs, setTabs] = useState();
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };
  //obj: {descrip, answer}
  const [value, setValue] = useState();

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {Object.entries(cohesivenessObj.options).map((k, index) => (
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
    <Slide direction="right" in={step === 6}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{cohesivenessObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="h6">{cohesivenessObj.descrip}</Typography>
        {optionsTabs}
        <Typography variant="body1">{value && value.descrip}</Typography>
        {setButton}
      </Paper>
    </Slide>
  );
};

export default Cohesiveness;
