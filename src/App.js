import React, { useState } from "react";
import "./App.css";
import RegistrationForm from "./RegistrationForm";
import ConfirmationDialog from "./ConfirmationDialog";
import { Jumbotron } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { sendData } from "./BackendAPI";

function App() {
  const [state, setState] = useState({
    showDialog: false,
    showForm: true,
  });

  return (
    <div className="App">
      {state.showForm ? (
        <RegistrationForm
          onSubmit={(formData) => {
            sendData(formData, () => {
              setState({ ...state, showDialog: true });
            });
          }}
        />
      ) : null}
      {!state.showForm ? (
        <Jumbotron>Thanks for User Registration!</Jumbotron>
      ) : null}
      <ConfirmationDialog
        show={state.showDialog}
        onYes={() => {
          setState({
            ...state,
            showDialog: false,
            showForm: false,
          });
        }}
      />
    </div>
  );
}

export default App;
