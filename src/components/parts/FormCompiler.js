import React, { useState } from "react";
import Begin from "../pages/Begin";
import GrainSize from "../pages/GrainSize";
import Color from "../pages/Color";
import Density from "../pages/Density";
import Moisture from "../pages/Moisture";
import Plasticity from "../pages/Plasticity";
import Cohesiveness from "../pages/Cohesiveness";
import SedimentaryStructure from "../pages/SedimentaryStructure";
import Weathering from "../pages/Weathering";
import DepositionalEnv from "../pages/DepositionalEnv";
import StratName from "../pages/StratName";
import StratContact from "../pages/StratContact";
import End from "../pages/End";

import Header from "./Header";
import Footer from "./Footer";
import NavDrawer from "./Drawer";

const FormCompiler = () => {
  const container = {
    padding: "0px !important",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  //get component to render
  const questionList = [
    {
      component: Begin,
      title: "Start",
      output: "",
    },
    { component: GrainSize, title: "Grain Size", output: "" },
    { component: Color, title: "Color", output: "" },
    { component: Density, title: "Density", output: "" },
    { component: Moisture, title: "Moisture", output: "" },
    { component: Plasticity, title: "Plasticity", output: "" },
    { component: Cohesiveness, title: "Cohesiveness", output: "" },
    {
      component: SedimentaryStructure,
      title: "Sedimentary Structure",
      output: "",
    },
    { component: Weathering, title: "Weathering", output: "" },
    {
      component: DepositionalEnv,
      title: "Depositional Environment",
      output: "",
    },
    { component: StratName, title: "Stratigraphic Name", output: "" },
    { component: StratContact, title: "Stratigraphic Contact", output: "" },
    { component: End, title: "Finish", output: "" },
  ];

  //step corresponds to questionComponentList index, and therefore output index to match
  const [step, setStep] = useState(0);
  //end output- complete sample description
  const [output, setOutput] = useState(questionList);
  const [drawer, setDrawer] = useState(false);

  //move forward/backward functions
  function moveForward() {
    setStep(step + 1);
  }
  function moveBackward() {
    setStep(step - 1);
  }

  function moveByIndex(i) {
    setStep(i);
  }
  //resart question line or make new sample
  function handleReset() {
    setStep(0);
    setOutput(questionList);
  }

  function toFinish() {
    setStep(output.length - 1);
  }

  function toggleDrawer() {
    setDrawer((prev) => !prev);
  }

  const disableButton = step === output.length - 1;

  const handleChange = (input) => (e) => {
    //button vs text inputs
    const val = e.currentTarget.value ? e.currentTarget.value : e.target.value;
    val === undefined
      ? setOutput(output, (output[step].output = ""))
      : setOutput(output, (output[step].output = val));
    moveForward();
  };

  const [answer, setAnswer] = useState();
  function generateAnswer() {
    let answer = [];
    output.forEach((e) => e.output.length && answer.push(e.output));
    setAnswer(answer.join(", ").toUpperCase());
  }

  //dynamically renders the current question component
  const currentQuestion = React.createElement(
    questionList[step].component,
    {
      step: step,
      outputStep: output[step],
      handleChange: handleChange,
      answer: answer,
      generateAnswer: generateAnswer,
      moveForward: moveForward,
    },
    null
  );

  const drawerList = [];
  questionList.forEach((item) => drawerList.push(item.title));

  return (
    <div style={container}>
      <Header
        toggleDrawer={toggleDrawer}
        title={output[step].title}
        handleReset={handleReset}
        disableButton={disableButton}
        toFinish={toFinish}
      />

      <NavDrawer
        drawerList={drawerList}
        drawer={drawer}
        toggleDrawer={toggleDrawer}
        moveByIndex={moveByIndex}
      />
      {currentQuestion}

      <Footer
        steps={output.length}
        activeStep={step}
        moveForward={moveForward}
        moveBackward={moveBackward}
      />
    </div>
  );
};

export default FormCompiler;
