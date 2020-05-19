import React, { useState, useEffect } from "react";
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

import {
  Button,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Container,
} from "../../utility/themeIndex";

const FormCompiler = () => {
  //get component to render
  const questionList = [
    {
      component: Begin,
      title: "Welcome to the Hand Sample Generator!",
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

  //move forward/backward functions
  function moveForward() {
    setStep(step + 1);
  }
  function moveBackward() {
    setStep(step - 1);
  }
  //resart question line or make new sample
  function handleReset() {
    setStep(0);
    setOutput(questionList);
  }

  function toFinish() {
    setStep(output.length - 1);
  }

  const backButton = (
    <Button onClick={moveBackward} variant="contained" disabled={step === 0}>
      <KeyboardArrowLeft />
      backward
    </Button>
  );
  const nextButton = (
    <Button
      onClick={moveForward}
      variant="contained"
      disabled={step === output.length - 1}
    >
      forward
      <KeyboardArrowRight />
    </Button>
  );

  const disableButton = step === output.length - 1;

  const handleChange = (input) => (e) => {
    //button vs text inputs
    const val = e.currentTarget.value ? e.currentTarget.value : e.target.value;
    setOutput(output, (output[step].output = val));
  };

  const [answer, setAnswer] = useState();
  function generateAnswer() {
    let answer = [];
    output.forEach((e) => e.output.length && answer.push(e.output));
    setAnswer(answer.join(", "));
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

  return (
    <Container maxWidth={false}>
      <Header
        title={output[step].title}
        handleReset={handleReset}
        disableButton={disableButton}
        toFinish={toFinish}
      />

      {currentQuestion}

      <Footer
        steps={output.length}
        activeStep={step}
        nextButton={nextButton}
        backButton={backButton}
      />
    </Container>
  );
};

export default FormCompiler;
