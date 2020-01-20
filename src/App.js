import React from "react";
import "./App.css";
import FormCompiler from "./components/parts/FormCompiler";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./utility/muiTheme";

//https://www.dot.ny.gov/divisions/engineering/technical-services/geotechnical-engineering-bureau/geotech-eng-repository/GDM_Ch-5_Soil_Rock_Classification.pdf

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <FormCompiler />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
