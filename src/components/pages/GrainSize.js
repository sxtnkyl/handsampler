import React, { useState, useEffect, Fragment } from "react";
import {
  makeStyles,
  Paper,
  TextField,
  Slide,
  Tabs,
  Tab,
  Typography,
  Box,
  Button
} from "../../utility/themeIndex";
import grainSizeObj from "../../utility/grainSizeObj";

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "center",
    paddingTop: theme.spacing(4)
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const GrainSize = props => {
  const classes = useStyles();
  const { card, step, outputStep, handleChange } = props;

  //used for index matching
  const [tabs, setTabs] = useState(0);
  //end output to put in global state is a group symbol and group name
  const [answer, setAnswer] = useState({ symbol: "", name: "" });

  //holds line for form update; strings used to make object path
  const [questionLine, setQuestionLine] = useState([]);
  useEffect(() => {
    combineLine(questionLine);
  }, [questionLine]);
  //path through grainSizeObj
  const [path, setPath] = useState(grainSizeObj);
  useEffect(() => {
    console.log("path called");
  }, [path]);

  const combineLine = () => {
    console.log("combine called", questionLine);
    //going down the question line yields
    //Obj(as value) > options > value > options > value > options > value >>> answer
    //https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference
    if (questionLine.length) {
      console.log("has length");
      let newLine = questionLine.reduce((o, i) => o[i], grainSizeObj);
      setPath(newLine);
    }
    return grainSizeObj;
  };

  function pushClick(e) {
    console.log(e);
    let newLine = [...questionLine];
    newLine.push("options", e);
    setQuestionLine(newLine);
    setTabs(0);
  }

  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  //question made of three parts: the question(currentQuestion), answer options(optionsTab), option description(tabPanel)
  //Next submits the value of the selected tab to the questionLine state
  const currentQuestion = <Typography>{path.question}</Typography>;

  const optionsTabs = (
    <Tabs
      value={tabs}
      onChange={handleTabs}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      {Object.keys(path.options).map((e, index) => (
        <Tab key={index} label={`${e}`} />
      ))}
    </Tabs>
  );

  const tabPanel = Object.entries(path.options).map((e, index) => (
    <Typography key={index} index={index}>
      {index === tabs && `${e[1].descrip}`}
      {index === tabs && (
        <Button key={e[index]} onClick={() => pushClick(e[0])}>
          select
        </Button>
      )}
    </Typography>
  ));

  return (
    <Slide direction="right" in={step === 1}>
      <Paper className={card}>
        {currentQuestion}
        {optionsTabs}
        {tabPanel}
      </Paper>
    </Slide>
  );
};

export default GrainSize;
