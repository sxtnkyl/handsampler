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
  Container,
} from "../../utility/themeIndex";

const Cohesiveness = (props) => {
  const { step, handleChange } = props;

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
    <Typography variant="h6" style={{ flex: 1 }}>
      {cohesivenessObj.options[tabs].descrip}
    </Typography>
  );

  const submitCohesion = value && (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      <Typography variant="button">Submit Cohesiveness</Typography>
    </Button>
  );

  return (
    <Slide direction="right" in={step === 6}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{cohesivenessObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">{cohesivenessObj.descrip}</Typography>
        <Container>
          {optionsTabs}
          {currentDescrip}
          {submitCohesion}
        </Container>
      </Paper>
    </Slide>
  );
};

export default Cohesiveness;
