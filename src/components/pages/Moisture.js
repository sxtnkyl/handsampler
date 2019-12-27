import React, { useState, useEffect } from "react";
import { moistureObj } from "../../utility/smallerObjs";
import { Paper, Button, Slide, Typography } from "../../utility/themeIndex";
import { display } from "@material-ui/system";

const Moisture = props => {
  const { card, step, outputStep, handleChange } = props;

  const [value, setValue] = useState();
  useEffect(() => {
    console.log(value);
  }, [value]);

  const options = Object.entries(moistureObj.options).map((o, index) => (
    <Button
      onClick={() => setValue(o[1])}
      variant="outlined"
      size="small"
      key={index}
    >
      {o[0]}
    </Button>
  ));
  const displayDescrip = value && value.descrip;
  const setButton = value && (
    <Button value={value.answer} onClick={handleChange(value)}>
      Set moisture
    </Button>
  );

  return (
    <Slide direction="right" in={step === 4}>
      <Paper className={card}>
        <Typography>
          {moistureObj.descrip}
          {moistureObj.question}
        </Typography>
        {options}
        {displayDescrip}
        {setButton}
      </Paper>
    </Slide>
  );
};

export default Moisture;
