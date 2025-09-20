import React from 'react';
import ReactEcharts from 'echarts-for-react';

function SalesChart({ data }) {
  const option = {
    title: { text: 'Monthly Sales Totals' },
    xAxis: {
      type: 'category',
      data: data.map(d => d._id.month + '/' + d._id.year)
    },
    yAxis: { type: 'value' },
    series: [
      {
        data: data.map(d => d.total),
        type: 'line'
      }
    ]
  };
  return <ReactEcharts option={option} style={{ height: '400px' }} />;
}

export default SalesChart;