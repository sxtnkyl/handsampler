import React, { useState, useEffect } from "react";
import { weatheringObj } from "../../utility/smallerObjs";
import {
  Divider,
  Paper,
  Button,
  Typography,
  Tab,
  Tabs,
  Slide,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  makeStyles,
  ButtonGroup
} from "../../utility/themeIndex";

const useStyles = makeStyles(theme => ({
  centerBoxes: {
    justifyContent: "center"
  },
  removeTopmargin: {
    marginTop: theme.spacing(1)
  }
}));

const Weathering = props => {
  const classes = useStyles();
  const { step, outputStep, handleChange } = props;

  //values to pass to formCompiler, holds an object for each question, and bool for checked options
  const [boxes, setBoxes] = useState();
  useEffect(() => {}, [boxes]);

  function makeBoxes() {
    //on page load make an object for each question/options
    let start = 0;
    let num = weatheringObj.questions.length;
    let allQs = [];
    //https://stackoverflow.com/questions/13104494/does-javascript-pass-by-reference
    while (start < num) {
      allQs[start] = {};
      start++;
    }
    weatheringObj.questions.forEach((q, index) => {
      let opts = q.options;
      opts.forEach(o => (allQs[index][o.name] = [o.answer, false]));
    });
    setBoxes(allQs);
  }
  //run once on load to make checkboxes values
  useEffect(() => {
    makeBoxes();
  }, []);

  const handleBoxes = e => {
    //ie: target = "C"
    let target = e.target.value;
    let newBox = [...boxes];
    let newArrVal = [];
    newArrVal.push(newBox[activeTab][target][0], !newBox[activeTab][target][1]);
    newBox[activeTab][target] = newArrVal;
    setBoxes(newBox);
    console.log(boxes);
  };

  const [value, setValue] = useState();
  useEffect(() => {
    //join each true value in each obj in boxes, with space between
    let pushString = "";
    boxes &&
      boxes.forEach(o => {
        let tempStr = [];
        for (let key in o) {
          o[key][1] == true && tempStr.push(key[0]);
        }
        pushString = pushString + " " + tempStr.join("").toUpperCase();
      });
    setValue(pushString);
  }, [boxes]);

  //for each question, 0-3
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    // console.log(activeTab);
  }, [activeTab]);

  const handleActiveTab = (e, newtab) => {
    setActiveTab(newtab);
  };

  const allQuestionsArray = weatheringObj.questions;

  const questionsTabs = (
    <Tabs onChange={handleActiveTab} centered value={activeTab}>
      {allQuestionsArray.map((k, index) => (
        <Tab key={index} value={index} label={k.question} />
      ))}
    </Tabs>
  );

  const checkBoxes = (
    <FormControl component="fieldset">
      <FormGroup row className={classes.centerBoxes}>
        {boxes &&
          allQuestionsArray[activeTab].options.map(o => (
            <FormControlLabel
              key={o.answer}
              control={
                <Checkbox
                  size="small"
                  key={o.name}
                  value={o.name}
                  checked={boxes[activeTab][o.name][1]}
                  onChange={e => handleBoxes(e)}
                />
              }
              label={`${o.name}: ${o.descrip}`}
            />
          ))}
      </FormGroup>
    </FormControl>
  );

  const submitBoxes = value && (
    <Button
      variant="outlined"
      size="large"
      value={value}
      onClick={handleChange(value)}
    >
      Submit Checkboxes
    </Button>
  );

  return (
    <Slide direction="right" in={step === 8}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{weatheringObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="h6">{weatheringObj.descrip}</Typography>
        {questionsTabs}
        <Typography variant="body1">
          {allQuestionsArray[activeTab].descrip}
        </Typography>
        {checkBoxes}
        <ButtonGroup>
          <Button
            className={classes.removeTopmargin}
            variant="text"
            onClick={() => makeBoxes()}
          >
            Reset Checkboxes
          </Button>
          {submitBoxes}
        </ButtonGroup>
      </Paper>
    </Slide>
  );
};

export default Weathering;
