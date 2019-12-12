import React, { useState, useEffect } from "react";
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

const densityObj = {
  coarse: {
    "0-4": "very loose",
    "5-10": "loose",
    "11-29": "medium dense",
    "30-49": "dense",
    ">50": "very dense"
  },
  fine: {
    "0-2": "very soft",
    "3-4": "soft",
    "5-8": "medium",
    "9-15": "stiff",
    "16-29": "very stiff",
    ">30": "hard"
  },
  step1:
    "A sample's density can be described based on the deposit grains. Is the sample coarse or fine grained?",
  step2: "The correct description is the based on the N-Value.",
  nValue:
    "The N value represents a standard value of energy required to penetrate 30 cm into soil by percussion drilling. It is standardized as the energy of a falling hammer from a height of 0,76 m or about 472,95 J. In North America it is considered that the percussion has a 60% energy efficiency, or 283.8J.  As SPT is the most most popular field test, the N value is widely used. Engineers correlate it to granular soils density and clays consistency. The N value is implemented on design using empirical correlations, specially in foundations design. Friction angle, cohesion, stiffness and even the risk of liquefaction can be estimated by the N value correlations."
};

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
