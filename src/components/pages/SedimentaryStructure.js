import React, { useState } from "react";
import { sedimentaryStructureObj } from "../../utility/smallerObjs";
import {
  Divider,
  Paper,
  Button,
  Typography,
  Tab,
  Tabs,
  Slide,
  Container,
} from "../../utility/themeIndex";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const SedimentaryStructure = (props) => {
  const matches = useMediaQuery("(min-width:1500px)");
  const { step, handleChange } = props;

  const [tabs, setTabs] = useState(false);
  const handleTabs = (e, newtab) => {
    setTabs(newtab);
  };

  let value = tabs !== false && sedimentaryStructureObj.options[tabs].answer;

  const optionsTabs = (
    <Tabs
      value={tabs}
      onChange={handleTabs}
      variant={matches ? "fullWidth" : "scrollable"}
      scrollButtons="on"
    >
      {sedimentaryStructureObj.options.map((k, index) => (
        <Tab key={index} label={`${k.id}`} />
      ))}
    </Tabs>
  );

  const currentDescrip = tabs !== false && (
    <Typography variant="h6" style={{ flex: 1 }}>
      {sedimentaryStructureObj.options[tabs].descrip}
    </Typography>
  );

  const submitStructure = value && (
    <Button
      variant="contained"
      size="small"
      value={value}
      onClick={handleChange(value)}
    >
      <Typography variant="button">Submit structure</Typography>
    </Button>
  );

  return (
    <Slide direction="right" in={step === 7}>
      <Paper variant="outlined" elevation={7}>
        <Typography variant="h3">{sedimentaryStructureObj.question}</Typography>
        <Divider variant="middle" />
        <Typography variant="subtitle1">
          {sedimentaryStructureObj.descrip}
        </Typography>
        <Container>
          {optionsTabs}
          {currentDescrip}
          {submitStructure}
        </Container>
      </Paper>
    </Slide>
  );
};

export default SedimentaryStructure;
