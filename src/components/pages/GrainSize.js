import React, { useState, useEffect, Fragment } from "react";
import {
  Divider,
  Paper,
  Slide,
  Tabs,
  Tab,
  Typography,
  Button
} from "../../utility/themeIndex";
import grainSizeObj from "../../utility/grainSizeObj";
//import as JSON and parse for increase performance

const GrainSize = props => {
  const { step, outputStep, handleChange } = props;

  //end output to put in global state is a group symbol and group name
  const [answer, setAnswer] = useState(null);
  //FUTURE TASK: onclick of grainsize answer add timeout func to display answer set

  //used for index matching
  const [tabs, setTabs] = useState(0);
  //holds line for form update; strings used to make object path
  const [questionLine, setQuestionLine] = useState([]);
  useEffect(() => {
    combineLine(questionLine);
  }, [questionLine]);
  //path through grainSizeObj
  const [path, setPath] = useState(grainSizeObj);
  useEffect(() => {}, [path]);

  const combineLine = () => {
    //going down the question line yields
    //Obj(as value) > options > value > options > value > options > value >>> answer
    //https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference
    if (questionLine.length) {
      let newLine = questionLine.reduce((o, i) => o[i], grainSizeObj);
      setPath(newLine);
    }
    return grainSizeObj;
  };

  function pushClick(e) {
    let newLine = [...questionLine];
    newLine.push("options", e);
    setQuestionLine(newLine);
    setTabs(0);
  }

  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {Object.keys(path.options).map((e, index) => (
        <Tab key={index} label={`${e}`} />
      ))}
    </Tabs>
  );

  const tabDescrip = Object.entries(path.options).map((e, index) => {
    //if at the end of question tree
    if (index === tabs && e[1].hasOwnProperty("symbol")) {
      let entry = index === tabs && e[1];
      let value = `${entry.name} (${entry.symbol})`;
      return (
        <>
          <Typography variant="body1" key={e} index={index}>
            The sample group symbol and name is:
          </Typography>
          <Button
            variant="outlined"
            size="large"
            value={value}
            onClick={handleChange(value)}
          >
            {value}
          </Button>
          <Typography variant="body1">click to confirm!</Typography>
        </>
      );
    }
    //not at the end of the question tree
    else
      return (
        <>
          <Typography variant="body1" key={e} index={index}>
            {index === tabs && `${e[1].descrip}`}
          </Typography>
          {index === tabs && (
            <Button
              variant="text"
              key={e[index]}
              onClick={() => pushClick(e[0])}
            >
              select
            </Button>
          )}
        </>
      );
  });

  return (
    <Slide direction="right" in={step === 1}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{path.question}</Typography>
        <Divider variant="middle" />
        {optionsTabs}
        {tabDescrip}
      </Paper>
    </Slide>
  );
};

export default GrainSize;
