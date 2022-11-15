import { FC } from "react";

import { useLogin } from "./hooks";
import { Form } from "../Form";

export const Login: FC = () => {
  const { onLogin } = useLogin();

  return <Form title="sign in" onSubmit={onLogin} />;
};
