import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import SignUpSignIn from "./components/SignUpSignIn";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <HomePage/>
        </div>
  );
}

export default App;
