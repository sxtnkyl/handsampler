import React from "react";
import "./App.css";
import FormCompiler from "./components/FormCompiler";

//state: step and fields
//
//methods: nextStep(), prevStep(), handleChange()
//structure: USER FORM: determines which component to display

function App() {
  return (
    <div className="App">
      <FormCompiler />
    </div>
  );
}

export default App;
