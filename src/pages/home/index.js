import React from "react";
import { HeroBanner } from "./heroBanner/HeroBanner";
import { Category } from "./category/Category";
import { Jobs } from "./jobs/Jobs";

export const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Category />
      <Jobs/>
    </div>
  );
};
