import React, { useState, useEffect } from "react";
import { moistureObj } from "../../utility/smallerObjs";
import {
  Paper,
  Button,
  Slide,
  Typography,
  ButtonGroup,
  makeStyles,
  Divider
} from "../../utility/themeIndex";

const useStyles = makeStyles(theme => ({
  groupButtons: {
    margin: theme.spacing(0)
  }
}));

const Moisture = props => {
  const classes = useStyles();
  const { step, outputStep, handleChange } = props;

  //obj: {descrip: "", answer: ""}
  const [value, setValue] = useState();
  useEffect(() => {}, [value]);

  const options = Object.entries(moistureObj.options).map((o, index) => (
    <Button
      className={classes.groupButtons}
      onClick={() => setValue(o[1])}
      size="small"
      key={index}
    >
      {o[0]}
    </Button>
  ));
  const displayDescrip = value && (
    <Typography variant="body1">{value.descrip}</Typography>
  );

  const setButton = value && (
    <Button
      value={value.answer}
      variant="outlined"
      size="large"
      onClick={handleChange(value)}
    >
      Set moisture
    </Button>
  );

  return (
    <Slide direction="right" in={step === 4}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{moistureObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="h6">{moistureObj.descrip}</Typography>
        <ButtonGroup variant="text" orientation="horizontal">
          {options}
        </ButtonGroup>
        {displayDescrip}
        {setButton}
      </Paper>
    </Slide>
  );
};

export default Moisture;
