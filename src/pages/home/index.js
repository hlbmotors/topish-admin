import React from "react";
import { HeroBanner } from "./heroBanner/HeroBanner";
import { Category } from "./category/Category";

export const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Category />
    </div>
  );
};
