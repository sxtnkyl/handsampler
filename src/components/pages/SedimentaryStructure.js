import React, { useState } from "react";
import { sedimentaryStructureObj } from "../../utility/smallerObjs";
import {
  Divider,
  Paper,
  Button,
  Typography,
  Tab,
  Tabs,
  Slide,
} from "../../utility/themeIndex";

const SedimentaryStructure = (props) => {
  const { step, handleChange } = props;
  const [tabs, setTabs] = useState();
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };
  //obj: {descrip, answer}
  const [value, setValue] = useState();

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {Object.entries(sedimentaryStructureObj.options).map((k, index) => (
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
    <Slide direction="right" in={step === 7}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{sedimentaryStructureObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="h6">{sedimentaryStructureObj.descrip}</Typography>
        {optionsTabs}
        <Typography variant="body1">{value && value.descrip}</Typography>
        {setButton}
      </Paper>
    </Slide>
  );
};

export default SedimentaryStructure;
