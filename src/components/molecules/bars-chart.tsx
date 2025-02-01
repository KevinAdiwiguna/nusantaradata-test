import React from "react";

// Constants
import { dataset, valueFormatter } from "@/constants/bars-chart-dataset";

// MUI
import { BarChart,  } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-10px, 0)",
    },
  },
};

export default function BarsChart() {
  return (
    <BarChart
      margin={{ top: 90, bottom: 0 }}
      className="w-full max-w-full mt-10"
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        { dataKey: "london", label: "London", valueFormatter },
        { dataKey: "paris", label: "Paris", valueFormatter },
        { dataKey: "newYork", label: "New York", valueFormatter },
        { dataKey: "seoul", label: "Seoul", valueFormatter },
      ]}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "top", horizontal: "middle" },
          padding: { top: 0, bottom: 100}
        },
      }}
      {...chartSetting}
    />
  );
}
