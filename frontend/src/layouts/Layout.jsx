import React from "react";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";

const Layout = () => {
  return (
    <div className="flex flex-row bg neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-4 min-h-0 overflow-auto">
          <TaskCard />
          <div className="flex flex-row gap-4 w-full">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;