import { FC } from "react";

import { useSignUp } from "./hooks";
import { Form } from "../Form";

export const SignUp: FC = () => {
  const { onSignUp } = useSignUp();

  return <Form title="sign in" onSubmit={onSignUp} />;
};
