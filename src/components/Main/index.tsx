import React from "react";
import Header from "../Top/Header.js";
import AddNewBar from "./AddNewBar";
import Feeds from "./Feeds";
import { auth } from "@/utils/auth.js";
const MainSection = (prop: any) => {
  const { ses } = prop;
  return (
    <div>
      <Header />

      {/*  Add A Post Section */}
      <AddNewBar session={ses} />

      {/*  Feeds */}
      <Feeds />
    </div>
  );
};

export default MainSection;
