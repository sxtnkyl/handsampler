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
  const { step, handleChange, moveForward } = props;

  const [tabs, setTabs] = useState(false);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  let value = tabs !== false && cohesivenessObj.options[tabs].answer;

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {cohesivenessObj.options.map((e, index) => (
        <Tab key={index} label={`${e.id}`} />
      ))}
    </Tabs>
  );

  const currentDescrip = tabs !== false && (
    <Typography variant="h6">
      {cohesivenessObj.options[tabs].descrip}
    </Typography>
  );

  const submitCohesion = tabs !== false && (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      Submit Cohesiveness
    </Button>
  );

  return (
    <Slide direction="right" in={step === 6}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{cohesivenessObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">{cohesivenessObj.descrip}</Typography>
        <Divider variant="middle" />
        {optionsTabs}
        {currentDescrip}
        {submitCohesion}
      </Paper>
    </Slide>
  );
};

export default Cohesiveness;
