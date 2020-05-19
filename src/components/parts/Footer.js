import React from "react";
import {
  Toolbar,
  MobileStepper,
  Button,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Typography,
} from "../../utility/themeIndex";

export default function Header(props) {
  // const classes = useStyles();
  const { steps, activeStep, moveForward, moveBackward } = props;

  const backButton = (
    <Button
      onClick={moveBackward}
      variant="contained"
      disabled={activeStep === 0}
    >
      <KeyboardArrowLeft />
      <Typography variant="button">backward</Typography>
    </Button>
  );

  const nextButton = (
    <Button
      onClick={moveForward}
      variant="contained"
      disabled={activeStep === steps - 1}
    >
      <Typography variant="button">forward</Typography>
      <KeyboardArrowRight />
    </Button>
  );

  return (
    <Toolbar disableGutters={true}>
      <MobileStepper
        position="static"
        steps={steps}
        activeStep={activeStep}
        nextButton={nextButton}
        backButton={backButton}
      />
    </Toolbar>
  );
}
