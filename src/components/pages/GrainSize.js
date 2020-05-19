import React, { useState } from "react";
import {
  Divider,
  Paper,
  Slide,
  Tabs,
  Tab,
  Typography,
  Button,
} from "../../utility/themeIndex";
import grainSizeObj from "../../utility/grainSizeObj";
//import as JSON and parse for increase performance
//previous solution to work down question line: hold string values in array
//https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference

const GrainSize = (props) => {
  const { step, handleChange } = props;

  //used for index matching
  const [tabs, setTabs] = useState(0);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  const [path, setPath] = useState(grainSizeObj);
  function updatePath() {
    let newPath = path.options[tabs];
    setPath(newPath);
    setTabs(0);
  }

  let hasOptions = path.hasOwnProperty("options");
  let hasQuestion = path.hasOwnProperty("question");
  let tabHasSymbol = path.options[tabs].hasOwnProperty("symbol");
  let value = tabHasSymbol && path.options[tabs].id;
  let answer =
    tabHasSymbol &&
    path.options[tabs].name.concat(" (", path.options[tabs].symbol, ")");

  const currentQuestion = hasQuestion && (
    <Typography variant="h3">{path.question}</Typography>
  );

  const currentDescription = path.options[tabs].hasOwnProperty("descrip") && (
    <Typography variant="h6">{path.options[tabs].descrip}</Typography>
  );

  const optionsTabs = hasOptions && (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {path.options.map((e, index) => (
        <Tab key={index} label={`${e.id}`} />
      ))}
    </Tabs>
  );

  const selectButton = (
    <Button variant="text" onClick={() => updatePath()}>
      select
    </Button>
  );

  const endOfLine = (
    <>
      <Typography variant="subtitle1">
        The sample group name and symbol is:
      </Typography>
      <Typography variant="h6">{answer}</Typography>
      <Button
        variant="contained"
        size="small"
        value={answer}
        onClick={handleChange(answer)}
      >
        Set Grain Size
      </Button>
    </>
  );

  return (
    <Slide direction="right" in={step === 1}>
      <Paper variant="outlined" elevation={7}>
        {currentQuestion}
        <Divider variant="middle" />
        {optionsTabs}
        {currentDescription}
        {tabHasSymbol ? endOfLine : selectButton}
      </Paper>
    </Slide>
  );
};

export default GrainSize;
