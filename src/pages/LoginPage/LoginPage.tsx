import { FC } from "react";
import { Link } from "react-router-dom";

import { Layout } from "../../shared";

export const LoginPage: FC = () => {
  return (
    <Layout>
      <div>
        <h1>Login</h1>
        <p>
          Or <Link to="/register">register</Link>
        </p>
      </div>
    </Layout>
  );
};
