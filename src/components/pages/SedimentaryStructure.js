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

  const [tabs, setTabs] = useState(false);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  let value = tabs !== false && sedimentaryStructureObj.options[tabs].answer;

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {sedimentaryStructureObj.options.map((k, index) => (
        <Tab key={index} label={`${k.id}`} />
      ))}
    </Tabs>
  );

  const currentDescrip = tabs !== false && (
    <Typography variant="h6">
      {sedimentaryStructureObj.options[tabs].descrip}
    </Typography>
  );

  const submitStructure = tabs !== false && (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      Submit structure
    </Button>
  );

  return (
    <Slide direction="right" in={step === 7}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{sedimentaryStructureObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">
          {sedimentaryStructureObj.descrip}
        </Typography>
        <Divider variant="middle" />
        {optionsTabs}
        {currentDescrip}
        {submitStructure}
      </Paper>
    </Slide>
  );
};

export default SedimentaryStructure;
