import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, MobileStepper } from "../../utility/themeIndex";

export default function Header(props) {
  // const classes = useStyles();
  const { steps, activeStep, nextButton, backButton } = props;

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
