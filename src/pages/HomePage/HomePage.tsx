import { FC, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Layout, useAuth } from "../../shared";
import { removeUser, useAppDispatch } from "../../store";

export const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const navi = useNavigate();
  const { isAuth, email } = useAuth();

  const logout = useCallback(() => {
    dispatch(removeUser());
  }, [dispatch]);

  useEffect(() => {
    !isAuth && navi("/login");
  }, [navi, isAuth]);

  return (
    <Layout>
      <div>
        <h1>Home</h1>
        <button onClick={logout}>Logout from {email}</button>
      </div>
    </Layout>
  );
};
