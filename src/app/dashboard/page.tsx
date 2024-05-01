"use client";
import React from "react";
import { handleLogout } from "@/utils/authActions/auth";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
