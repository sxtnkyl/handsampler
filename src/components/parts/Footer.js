import React from "react";
import {
  Toolbar,
  MobileStepper,
  Button,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Typography,
} from "../../utility/themeIndex";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Header(props) {
  const matches = useMediaQuery("(min-width:920px)");
  const { steps, activeStep, moveForward, moveBackward } = props;

  const backButton = (
    <Button
      onClick={moveBackward}
      variant="contained"
      disabled={activeStep === 0}
    >
      <KeyboardArrowLeft />
      {matches && <Typography variant="button">back</Typography>}
    </Button>
  );

  const nextButton = (
    <Button
      onClick={moveForward}
      variant="contained"
      disabled={activeStep === steps - 1}
    >
      {matches && <Typography variant="button">next</Typography>}
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
