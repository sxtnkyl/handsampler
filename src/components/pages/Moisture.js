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
  Container,
} from "../../utility/themeIndex";

const Moisture = (props) => {
  const { step, handleChange } = props;

  const [tabs, setTabs] = useState(false);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  let value = tabs !== false && moistureObj.options[tabs].answer;

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {moistureObj.options.map((k, index) => (
        <Tab key={index} label={`${k.id}`} />
      ))}
    </Tabs>
  );

  const currentDescrip = tabs !== false && (
    <Typography variant="h6" style={{ flex: 1 }}>
      {moistureObj.options[tabs].descrip}
    </Typography>
  );

  const submitMoisture = value && (
    <Button
      value={value}
      variant="contained"
      size="small"
      onClick={handleChange(value)}
    >
      <Typography variant="button">Submit moisture</Typography>
    </Button>
  );

  return (
    <Slide direction="right" in={step === 4}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{moistureObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">{moistureObj.descrip}</Typography>
        <Container>
          {optionsTabs}
          {currentDescrip}
          {submitMoisture}
        </Container>
      </Paper>
    </Slide>
  );
};

export default Moisture;
