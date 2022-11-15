import { FC } from "react";
import { Link } from "react-router-dom";

import { Layout } from "../../shared";

export const RegisterPage: FC = () => {
  return (
    <Layout>
      <div>
        <h1>Register</h1>
        <p>
          Already have an account? <Link to="/login">login</Link>
        </p>
      </div>
    </Layout>
  );
};
