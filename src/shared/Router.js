import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as style from "../styles/style";
import Main from "../pages/Main";
import Header from "../pages/Header";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <style.FlexCenterColumn>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="detail" element={<Detail />} />
        </Routes>
      </style.FlexCenterColumn>
    </BrowserRouter>
  );
};

export default Router;
