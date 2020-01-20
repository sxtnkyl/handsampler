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
  Divider,
  Radio,
  ButtonGroup
} from "../../utility/themeIndex";

const useStyles = makeStyles(theme => ({
  groupButtons: {
    margin: "0px 0px"
  },
  centerRadios: {
    marginTop: theme.spacing(3),
    justifyContent: "center"
  }
}));

const Density = props => {
  const classes = useStyles();
  const { step, outputStep, handleChange } = props;

  //null/dont render radios, true/render coarse, false/render fine
  const [size, setSize] = useState(null);

  const [value, setValue] = useState("");

  //https://stackoverflow.com/questions/33680157/how-can-i-get-input-radio-elements-to-horizontally-align-in-react-material-ui
  //components can inherit properties of parent components
  const nRadios = (
    <FormControl component="fieldset">
      <RadioGroup
        className={classes.centerRadios}
        row
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
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{densityObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="h6">{densityObj.descrip}</Typography>
        <ButtonGroup variant="text" orientation="horizontal">
          <Button
            className={classes.groupButtons}
            onClick={() => setSize(true)}
            size="small"
          >
            Coarse
          </Button>
          <Button
            className={classes.groupButtons}
            onClick={() => setSize(false)}
            size="small"
          >
            Fine
          </Button>
        </ButtonGroup>
        {size !== null && nRadios}
      </Paper>
    </Slide>
  );
};

export default Density;
