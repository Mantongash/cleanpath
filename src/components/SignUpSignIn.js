import { Amplify } from "aws-amplify";

import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const SignUpSignIn = () => {
  return <div>Hello</div>;
};

export default withAuthenticator(SignUpSignIn);
