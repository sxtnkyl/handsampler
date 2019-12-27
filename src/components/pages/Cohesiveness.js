import React, { useState, useEffect } from "react";
import { cohesivenessObj } from "../../utility/smallerObjs";
import {
  makeStyles,
  Paper,
  Button,
  Typography,
  Tab,
  Tabs,
  Slide
} from "../../utility/themeIndex";

const Cohesiveness = props => {
  const { card, step, outputStep, handleChange } = props;

  const [tabs, setTabs] = useState(0);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };
  //obj: {descrip, answer}
  const [value, setValue] = useState();

  const question = <Typography>{cohesivenessObj.question}</Typography>;
  const descrip = <Typography>{cohesivenessObj.descrip}</Typography>;

  const optionsTabs = (
    <Tabs
      value={tabs}
      onChange={handleTabs}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      {Object.entries(cohesivenessObj.options).map((k, index) => (
        <Tab key={index} label={`${k[0]}`} onClick={() => setValue(k[1])} />
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
    <Slide direction="right" in={step === 6}>
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

export default Cohesiveness;
