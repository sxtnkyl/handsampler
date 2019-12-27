import React, { useState, useEffect } from "react";
import { weatheringObj } from "../../utility/smallerObjs";
import {
  makeStyles,
  Paper,
  Button,
  Typography,
  Tab,
  Tabs,
  Slide,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox
} from "../../utility/themeIndex";
import { DragHandleTwoTone } from "@material-ui/icons";

const Weathering = props => {
  const { card, step, outputStep, handleChange } = props;

  //values to pass to formCompiler, holds an object for each question, and bool for checked options
  const [boxes, setBoxes] = useState();
  useEffect(() => {
    console.log(boxes);
  }, [boxes]);

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
  };

  //compile and submit all the selected items
  const compileCheckBoxes = () => {
    let newStr = [];
    //join each true value in each obj in boxes, with space between
    boxes.forEach(o => {
      let tempStr = [];
      for (let key in o) {
        o[key][1] == true && tempStr.push(key[0]);
      }
      newStr.push(tempStr.join(""));
    });
    let joinedStr = newStr.join("-");
    console.log(joinedStr);
  };

  //for each question, 0-3
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    // console.log(activeTab);
  }, [activeTab]);

  const handleActiveTab = (e, newtab) => {
    setActiveTab(newtab);
  };

  const allQuestionsArray = weatheringObj.questions;

  const question = <Typography>{weatheringObj.question}</Typography>;
  const descrip = <Typography>{weatheringObj.descrip}</Typography>;

  const subQuestion = (
    <Typography>{allQuestionsArray[activeTab].question}</Typography>
  );
  const subDescrip = (
    <Typography>{allQuestionsArray[activeTab].descrip}</Typography>
  );

  const questionsTabs = (
    <Tabs
      onChange={handleActiveTab}
      indicatorColor="primary"
      textColor="primary"
      centered
      value={activeTab}
    >
      {allQuestionsArray.map((k, index) => (
        <Tab key={index} value={index} label={k.question} />
      ))}
    </Tabs>
  );

  const checkBoxes = (
    <FormControl>
      <FormGroup>
        {boxes &&
          allQuestionsArray[activeTab].options.map(o => (
            <FormControlLabel
              key={o.answer}
              control={
                <Checkbox
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

  //gonig to have to raise checkbox handler to formCompiler, make new utility
  const sumbitButton = (
    <Button onClick={() => compileCheckBoxes()}>Submit</Button>
  );
  const resetBoxes = (
    <Button onClick={() => makeBoxes()}>Reset checkboxes</Button>
  );

  return (
    <Slide direction="right" in={step === 8}>
      <Paper className={card}>
        {question}
        {descrip}
        {questionsTabs}
        {subQuestion}
        {subDescrip}
        {checkBoxes}
        {sumbitButton}
        {resetBoxes}
      </Paper>
    </Slide>
  );
};

export default Weathering;
