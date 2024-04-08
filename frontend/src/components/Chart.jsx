import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Task: 40,
  },
  {
    name: "Feb",
    Task: 30,
  },
  {
    name: "Mar",
    Task: 24,
  },
  {
    name: "Apr",
    Task: 27,
  },
  {
    name: "May",
    Task: 18,
  },
  {
    name: "Jun",
    Task: 50,
  },
  {
    name: "July",
    Task: 34,
  },
  {
    name: "Aug",
    Task: 40,
  },
  {
    name: "Sep",
    Task: 56,
  },
  {
    name: "Oct",
    Task: 58,
  },
  {
    name: "Nov",
    Task: 40,
  },
  {
    name: "Dec",
    Task: 39,
  },
];

function Chart() {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Tasks Status</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Task" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
