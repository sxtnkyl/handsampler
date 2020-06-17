import React, { useState } from "react";
import {
  Divider,
  Paper,
  Slide,
  Tabs,
  Tab,
  Typography,
  Button,
  Container,
} from "../../utility/themeIndex";
import grainSizeObj from "../../utility/grainSizeObj";
//import as JSON and parse for increase performance
//previous solution to work down question line: hold string values in array
//https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference

const GrainSize = (props) => {
  const { step, handleChange } = props;

  //used for index matching
  const [tabs, setTabs] = useState(false);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  const [path, setPath] = useState(grainSizeObj);
  function updatePath() {
    let newPath = path.options[tabs];
    setPath(newPath);
    setTabs(false);
  }

  let currentTab = tabs !== false && path.options[tabs];
  let hasOptions = path.hasOwnProperty("options");
  let hasQuestion = path.hasOwnProperty("question");
  let tabHasSymbol = currentTab.hasOwnProperty("symbol");
  // let value = tabHasSymbol && currentTab.id;
  let answer =
    tabHasSymbol &&
    currentTab.name.concat(" (", currentTab.symbol, ")").toUpperCase();

  const currentQuestion = hasQuestion && (
    <Typography variant="h3">{path.question}</Typography>
  );

  const currentDescription = currentTab.hasOwnProperty("descrip") && (
    <Typography variant="h6" style={{ flex: 1 }}>
      {currentTab.descrip}
    </Typography>
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
      <Container>
        <Typography variant="subtitle1">
          The sample group name and symbol is:
        </Typography>
        <Typography variant="h4">{answer}</Typography>
      </Container>
      <Button
        variant="contained"
        size="small"
        value={answer}
        onClick={handleChange(answer)}
      >
        <Typography variant="button">Submit Grain Size</Typography>
      </Button>
    </>
  );

  return (
    <Slide direction="right" in={step === 1}>
      <Paper variant="outlined" elevation={7}>
        {currentQuestion}
        <Divider variant="middle" />
        <Container>
          {optionsTabs}
          {currentDescription}
          {tabs === false ? null : tabHasSymbol ? endOfLine : selectButton}
        </Container>
      </Paper>
    </Slide>
  );
};

export default GrainSize;
