import React, { useState } from "react";
import { stratContactObj } from "../../utility/smallerObjs";
import {
  Paper,
  Typography,
  Button,
  Tabs,
  Tab,
  Slide
} from "../../utility/themeIndex";

const StratContact = props => {
  const { card, step, outputStep, handleChange } = props;
  const [tabs, setTabs] = useState(0);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };
  //obj: {descrip, answer}
  const [value, setValue] = useState();

  const question = <Typography>{stratContactObj.question}</Typography>;
  const descrip = <Typography>{stratContactObj.descrip}</Typography>;

  const optionsTabs = (
    <Tabs
      value={tabs}
      onChange={handleTabs}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      {stratContactObj.options.map((k, index) => (
        <Tab key={index} label={k.name} onClick={() => setValue(k)} />
      ))}
    </Tabs>
  );

  const tabDescrip = <Typography>{value && value.descrip}</Typography>;
  const setButton = value && (
    <Button value={value.answer} onClick={handleChange(value)}>
      Set moisture
    </Button>
  );

  return (
    <Slide direction="right" in={step === 11}>
      <Paper className={card}>
        {question}
        {descrip}
        {optionsTabs}
        {tabDescrip}
        {setButton}
      </Paper>
    </Slide>
  );
};

export default StratContact;
