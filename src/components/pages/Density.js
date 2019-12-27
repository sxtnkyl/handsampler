import React, { useState, useEffect } from "react";
import { densityObj } from "../../utility/smallerObjs";
import {
  makeStyles,
  Paper,
  Button,
  Typography,
  Slide,
  FormControl,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  Radio
} from "../../utility/themeIndex";

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: "center",
    paddingTop: theme.spacing(4)
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

const Density = props => {
  const classes = useStyles();
  const { card, step, outputStep, handleChange } = props;

  //null/dont render radios, true/render coarse, false/render fine
  const [size, setSize] = useState(null);

  const [value, setValue] = useState("");

  const nRadios = (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">N-Value</FormLabel>
      <RadioGroup
        aria-label="n-value"
        name="density"
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        {Object.entries(size ? densityObj.coarse : densityObj.fine).map(e => (
          <FormControlLabel
            key={e[1]}
            value={e[1]}
            control={<Radio />}
            label={`${e[0]}: ${e[1]}`}
            onClick={handleChange(value)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
  return (
    <Slide direction="right" in={step === 3}>
      <Paper className={`${classes.paper} ${card}`}>
        <Typography variant="h6">{densityObj.step1}</Typography>
        <Button onClick={() => setSize(true)} variant="outlined" size="small">
          Coarse
        </Button>
        <Button onClick={() => setSize(false)} variant="outlined" size="small">
          Fine
        </Button>
        {size !== null && nRadios}
      </Paper>
    </Slide>
  );
};

export default Density;
