import { FC, useState } from "react";

import { FormModel } from "./Form.model";

export const Form: FC<FormModel> = ({ title, onSubmit }) => {
  const [email, setEmail] = useState("test@test.test");
  const [password, setPassword] = useState("123123");

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <button title={title} onClick={() => onSubmit({ email, password })}>
        {title}
      </button>
    </div>
  );
};
