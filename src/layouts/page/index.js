import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export const LayoutPage = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
