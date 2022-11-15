import { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Layout, useAuth } from "../../shared";
import { SignUp } from "../../components";

export const RegisterPage: FC = () => {
  const { isAuth } = useAuth();
  const navi = useNavigate();

  useEffect(() => {
    isAuth && navi("/");
  }, [isAuth, navi]);
  return (
    <Layout>
      <div>
        <h1>Register</h1>
        <SignUp />
        <p>
          Already have an account? <Link to="/login">login</Link>
        </p>
      </div>
    </Layout>
  );
};
