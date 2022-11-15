import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { LoginPage, HomePage, RegisterPage, NotFoundPage } from "../pages";

export const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
