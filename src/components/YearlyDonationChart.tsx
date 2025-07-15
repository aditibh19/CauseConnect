import { Box, Title } from "@mantine/core";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const series = [
  {
    name: "Medical",
    data: [44, 55, 41, 67, 22, 43],
  },
  {
    name: "Environment",
    data: [13, 23, 20, 8, 13, 27],
  },
  {
    name: "Technology",
    data: [11, 17, 15, 15, 21, 14],
  },
  {
    name: "Financial Emergency",
    data: [21, 7, 25, 13, 22, 8],
  },
  {
    name: "Emergency",
    data: [13, 23, 20, 8, 13, 27],
  },
  {
    name: "Crisis Relief",
    data: [11, 17, 15, 15, 21, 14],
  },
  {
    name: "Film & Videos",
    data: [11, 17, 15, 15, 21, 14],
  },
];

const options: ApexOptions = {
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: { show: true },
    zoom: { enabled: true },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        legend: {
          position: "bottom",
          offsetY: 10,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 6,
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "12px",
            fontWeight: 700,
          },
        },
      },
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "01/01/2023 GMT",
      "02/01/2023 GMT",
      "03/01/2023 GMT",
      "04/01/2023 GMT",
      "05/01/2023 GMT",
      "06/01/2023 GMT",
    ],
    labels: {
      rotate: -45,
    },
  },
  legend: {
    position: "right",
    offsetY: 30,
    markers: {
      radius: 4,
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const YearlyDonationChart = () => {
  return (
    <Box mt="md">
      <Title order={3} mb="sm">
        Yearly Donation Overview
      </Title>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </Box>
  );
};

export default YearlyDonationChart;
