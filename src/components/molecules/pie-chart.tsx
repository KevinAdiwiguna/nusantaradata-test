import React from 'react';

// MUI
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

// Constants
import { desktopOS, valueFormatter } from '@/constants/pie-chart-dataset';

export default function PieCharts() {
  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
          ...data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
  );
}

const size = {
  width: 400,
  height: 200,
};

const data = {
  data: desktopOS,
  valueFormatter,
};