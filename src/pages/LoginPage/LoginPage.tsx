import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Layout, useAuth } from "../../shared";
import { Login } from "../../components";

export const LoginPage: FC = () => {
  const { isAuth } = useAuth();
  const navi = useNavigate();

  useEffect(() => {
    isAuth && navi("/");
  }, [isAuth, navi]);

  return (
    <Layout>
      <div>
        <h1>Login</h1>
        <Login />
        <p>
          Or <Link to="/register">register</Link>
        </p>
      </div>
    </Layout>
  );
};
