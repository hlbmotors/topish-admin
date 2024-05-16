import React from "react";
import { LayoutPage } from "../../layouts/page";
import { Route, Routes } from "react-router-dom";
import { Home } from "../home/home";

export const Public = () => {
  return (
    <div>
      <LayoutPage>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </LayoutPage>
    </div>
  );
};
