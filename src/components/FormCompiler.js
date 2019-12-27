import React, { useState, useEffect } from "react";
import Begin from "./pages/Begin";
import GrainSize from "./pages/GrainSize";
import Color from "./pages/Color";
import Density from "./pages/Density";
import Moisture from "./pages/Moisture";
import Plasticity from "./pages/Plasticity";
import Cohesiveness from "./pages/Cohesiveness";
import SedimentaryStructure from "./pages/SedimentaryStructure";
import Weathering from "./pages/Weathering";
import DepositionalEnv from "./pages/DepositionalEnv";
import StratName from "./pages/StratName";
import StratContact from "./pages/StratContact";
import End from "./pages/End";

import Header from "./Header";
import Footer from "./Footer";

import {
  makeStyles,
  Button,
  MobileStepper,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Grid
} from "../utility/themeIndex";

const useStyles = makeStyles(theme => ({
  gridContainer: { minHeight: "100vh", background: "" },
  card: { background: "", width: "100%" },
  header: { background: "", width: "80%" },
  main: {
    padding: theme.spacing(3),
    background: "",
    width: "80%",
    flex: 1
  },
  progress: {
    padding: theme.spacing(3),
    background: "",
    width: "100%"
  },
  footer: {
    width: "80%"
  }
}));

const FormCompiler = () => {
  const classes = useStyles();
  //get component to render
  const questionList = [
    {
      component: Begin,
      title: "Welcome to the Hand Sample Generator!",
      output: "let's begin"
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
      output: ""
    },
    { component: Weathering, title: "Weathering", output: "" },
    {
      component: DepositionalEnv,
      title: "Depositional Environment",
      output: ""
    },
    { component: StratName, title: "Stratigraphic Name", output: "" },
    { component: StratContact, title: "Stratigraphic Contact", output: "" },
    { component: End, title: "Finish", output: "" }
  ];

  //step corresponds to questionComponentList index, and therefore output index to match
  const [step, setStep] = useState(0);
  //end output- complete sample description
  const [output, setOutput] = useState(questionList);
  useEffect(() => {
    console.log(output);
  }, [output]);

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

  const resetButton = (
    <Button onClick={handleReset} variant="outlined" size="small">
      reset
    </Button>
  );
  const finishButton = (
    <Button
      variant="outlined"
      size="small"
      disabled={step === output.length - 1}
    >
      finish
    </Button>
  );
  const backButton = (
    <Button onClick={moveBackward} disabled={step === 0}>
      <KeyboardArrowLeft />
      backward
    </Button>
  );
  const nextButton = (
    <Button onClick={moveForward} disabled={step === output.length - 1}>
      forward
      <KeyboardArrowRight />
    </Button>
  );

  const handleChange = input => e => {
    //val const for mui button vs other inputs
    console.log(e);
    const val = e.currentTarget.value ? e.currentTarget.value : e.target.value;
    setOutput(output, (output[step].output = val));
    console.log(output);
  };

  //renders the active step, gives components access to update output state
  const currentQuestion = React.createElement(
    questionList[step].component,
    {
      card: classes.card,
      step: step,
      outputStep: output[step],
      handleChange: handleChange
    },
    null
  );

  const progressBar = (
    <MobileStepper
      variant="progress"
      steps={output.length}
      position="static"
      activeStep={step}
      className={classes.progress}
      nextButton={nextButton}
      backButton={backButton}
    />
  );

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.gridContainer}
    >
      <Grid item className={classes.header}>
        <Header
          title={output[step].title}
          reset={resetButton}
          finish={finishButton}
        />
      </Grid>
      <Grid container item className={classes.main}>
        {currentQuestion}
      </Grid>
      <Grid item className={classes.footer}>
        <Footer progress={progressBar} />
      </Grid>
    </Grid>
  );
};

export default FormCompiler;
