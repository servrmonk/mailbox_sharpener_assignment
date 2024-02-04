import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../MailComponents/Main";
import LoginPage from "./loginPage";
import { useSelector } from "react-redux";
import ForgetPassword from "./ForgetPasswordPage";

export default function AllRoutes() {
  const { isAuth: data } = useSelector((state) => state.auth);

  return (
    <Routes>
      {data && <Route path="/sharpener-mailbox" element={<Main />} />}
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgetPassword" element={<ForgetPassword />} />

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}
