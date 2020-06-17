import React, { useState } from "react";
import { stratContactObj } from "../../utility/smallerObjs";
import {
  Paper,
  Typography,
  Button,
  Tabs,
  Tab,
  Slide,
  Divider,
  Container,
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
    <Typography variant="h6" style={{ flex: 1 }}>
      {stratContactObj.options[tabs].descrip}
    </Typography>
  );

  const submitContact = value && (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      <Typography variant="button">Submit Contact</Typography>
    </Button>
  );

  return (
    <Slide direction="right" in={step === 11}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{stratContactObj.question}</Typography>
        <Divider />
        <Typography variant="subtitle1">{stratContactObj.descrip}</Typography>
        <Container>
          {optionsTabs}
          {currentDescrip}
          {submitContact}
        </Container>
      </Paper>
    </Slide>
  );
};

export default StratContact;
