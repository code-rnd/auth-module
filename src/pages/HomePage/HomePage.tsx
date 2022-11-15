import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Layout, useAuth } from "../../shared";

export const HomePage: FC = () => {
  const navi = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    !isAuth && navi("/login");
  }, [navi, isAuth]);

  return (
    <Layout>
      <div>HomePage</div>
    </Layout>
  );
};
