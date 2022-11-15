import { FC, ReactNode } from "react";

import s from "./Layout.module.scss";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};
