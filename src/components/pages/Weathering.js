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
  RotateLeftRounded,
  DoneRounded,
} from "../../utility/themeIndex";

const Weathering = (props) => {
  const { step, handleChange } = props;

  //array of objects(an object for each question), with key(name) and value(arr["letter", checked(bool)])
  const [boxes, setBoxes] = useState();

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
      opts.forEach((o) => (allQs[index][o.name] = [o.answer, false]));
    });
    setBoxes(allQs);
  }
  //run once on load to make checkboxes values
  useEffect(() => {
    makeBoxes();
  }, []);

  const handleBoxes = (e) => {
    //ie: target = "C"
    let target = e.target.value;
    let newBox = [...boxes];
    let newArrVal = [];
    newArrVal.push(newBox[activeTab][target][0], !newBox[activeTab][target][1]);
    newBox[activeTab][target] = newArrVal;
    setBoxes(newBox);
  };

  const [value, setValue] = useState();
  useEffect(() => {
    //join each true value in each obj in boxes, with space between
    let pushString = "";
    boxes &&
      boxes.forEach((o) => {
        let tempStr = [];
        for (let key in o) {
          o[key][1] === true && tempStr.push(key[0]);
        }
        pushString = pushString + " " + tempStr.join("").toUpperCase();
      });
    setValue(pushString);
  }, [boxes]);

  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (e, newtab) => {
    setActiveTab(newtab);
  };

  const optionsTabs = (
    <Tabs onChange={handleActiveTab} value={activeTab} variant="scrollable">
      {weatheringObj.questions.map((k, index) => (
        <Tab key={index} value={index} label={k.question} />
      ))}
    </Tabs>
  );

  const checkBoxes = boxes && (
    <FormControl component="fieldset">
      <FormGroup row style={{ justifyContent: "center" }}>
        {weatheringObj.questions[activeTab].options.map((o) => (
          <FormControlLabel
            key={o.answer}
            control={
              <Checkbox
                size="small"
                key={o.name}
                value={o.name}
                checked={boxes[activeTab][o.name][1]}
                onChange={(e) => handleBoxes(e)}
              />
            }
            label={`${o.name.toUpperCase()}: ${o.descrip}`}
          />
        ))}
      </FormGroup>
    </FormControl>
  );

  const resetBoxes = (
    <Button onClick={makeBoxes} variant="text" style={{ marginBottom: "16px" }}>
      <RotateLeftRounded />
      <Typography variant="button">Reset Checkboxes</Typography>
    </Button>
  );
  const submitBoxes = (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      <Typography variant="button">Submit features</Typography>
    </Button>
  );

  return (
    <Slide direction="right" in={step === 8}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{weatheringObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">{weatheringObj.descrip}</Typography>
        <Divider variant="middle" />
        {optionsTabs}
        <Typography variant="h6">
          {weatheringObj.questions[activeTab].descrip}
        </Typography>
        {checkBoxes}
        {resetBoxes}
        {submitBoxes}
      </Paper>
    </Slide>
  );
};

export default Weathering;
