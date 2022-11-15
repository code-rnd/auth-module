import { FC } from "react";
import { Link } from "react-router-dom";

import { Layout } from "../../shared";

export const NotFoundPage: FC = () => {
  return (
    <Layout>
      <div>
        <h1>NotFoundPage</h1>
        <p>
          come back <Link to="/">go</Link>
        </p>
      </div>
    </Layout>
  );
};
