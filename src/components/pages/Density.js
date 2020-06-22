import React, { useState } from "react";
import { densityObj } from "../../utility/smallerObjs";
import {
  Paper,
  Typography,
  Slide,
  Divider,
  Slider,
  Tabs,
  Tab,
  Tooltip,
  Button,
  Container,
  withStyles,
} from "../../utility/themeIndex";

const DensitySlider = withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
  thumb: {
    border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
  },
  track: {
    height: "4px",
    borderRadius: "4px",
  },
  valueLabel: {
    left: "auto",
    //ATTRIBUTE SELECTOR
    //https://stackoverflow.com/questions/5110249/wildcard-in-css-for-classes
    // "& span[class*='PrivateValueLabel-circle-']": {
    //   backgroundColor: theme.palette.secondary.main,
    // },
    // "& span[class*='PrivateValueLabel-label-']": {
    //   color: theme.palette.secondary.contrastText,
    // },
    "& $span": {
      backgroundColor: theme.palette.secondary.main,
      "& $span": {
        color: theme.palette.secondary.contrastText,
      },
    },
  },
}))(Slider);

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  arrow: {
    color: theme.palette.secondary.main,
  },
}))(Tooltip);

const Density = (props) => {
  const { step, handleChange } = props;

  const [tabs, setTabs] = useState(false);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
    setValue(0);
    setLabel("");
  };
  const optionsTabs = (
    <Tabs value={tabs} onChange={handleTabs} centered>
      {densityObj.options.map((k, index) => (
        <Tab key={index} label={`${k.id}`} onClick={() => setTabs(index)} />
      ))}
    </Tabs>
  );

  const [sliderVal, setValue] = useState(0);
  const [label, setLabel] = useState("");
  const handleSliderChange = (event, newValue) => {
    if (sliderVal !== newValue) {
      setValue(newValue);
      setLabel(makeLabel(newValue));
    }
  };

  const valueFormat = (value) => {
    return `${value} N`;
  };
  //slider label text
  const valueLabelFormat = (sliderVal) => {
    if (sliderVal === densityObj.options[tabs].max)
      return ">" + densityObj.options[tabs].max;
    else return sliderVal;
  };

  //return string label of number value
  const makeLabel = (val) => {
    let vals = densityObj.options[tabs].values;
    let index = vals.findIndex((v) => v.value >= val);
    if (vals[index].value === val) return vals[index].descriptor;
    if (vals[index].value > val) return vals[index - 1].descriptor;
  };

  const inputSlider = tabs !== false && (
    <Container
      style={{
        alignItems: "center",
      }}
    >
      <DensitySlider
        value={sliderVal}
        onChange={handleSliderChange}
        min={0}
        max={densityObj.options[tabs].max}
        valueLabelDisplay="on"
        valueLabelFormat={valueLabelFormat}
        marks={densityObj.options[tabs].values}
        getAriaValueText={valueFormat}
      />
      <Typography variant="h6">{label.toUpperCase()}</Typography>
    </Container>
  );

  const submitDensity = tabs !== false && (
    <Button
      variant="contained"
      size="small"
      value={`${label} (${sliderVal}N)`}
      onClick={handleChange(`${label} (${sliderVal}N)`)}
    >
      <Typography variant="button">Submit Density</Typography>
    </Button>
  );

  return (
    <Slide direction="right" in={step === 3}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{densityObj.question}</Typography>
        <Divider variant="middle" />
        <Container>
          <LightTooltip title={densityObj.nValue} placement="bottom">
            <Typography variant="subtitle1">{densityObj.descrip}</Typography>
          </LightTooltip>
          {optionsTabs}
          {inputSlider}
          {submitDensity}
        </Container>
      </Paper>
    </Slide>
  );
};

export default Density;
