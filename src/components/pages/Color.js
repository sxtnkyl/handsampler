import React from "react";
import {
  Paper,
  TextField,
  Slide,
  Typography,
  Divider,
  makeStyles
} from "../../utility/themeIndex";

const useStyles = makeStyles(theme => ({
  expand: {
    flex: 1
  }
}));

const Color = props => {
  const classes = useStyles();
  const { step, outputStep, handleChange } = props;

  return (
    <Slide direction="right" in={step === 2}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">
          Enter the colors that best represents the sample.
        </Typography>
        <Divider variant="middle" />
        <Typography variant="h6">
          Type all present Munsell scale colors from most to least prevalent
        </Typography>
        <TextField
          className={classes.expand}
          variant="filled"
          multiline={true}
          rows="6"
          placeholder="change color"
          label={outputStep.output}
          onChange={handleChange(outputStep.title)}
          defaultValue={outputStep.output}
        />
      </Paper>
    </Slide>
  );
};

export default Color;
