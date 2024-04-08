import React from "react";
import Chart from "../components/Chart";
import TaskCard from "../components/TaskCard";

function Dashboard() {
  return (
    <div className=" flex-1 p-4 min-h-0 overflow-auto">
      <TaskCard />
      <div className="flex flex-row gap-4 w-full">
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
