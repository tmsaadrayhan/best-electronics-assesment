"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the plugin

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);
//images
import Image from "next/image";
import arrow_forward_ios from "../../public/assets/arrow_forward_ios.png";
import arrow_forward_ios1 from "../../public/assets/arrow_forward_ios (1).png";
import dashboard from "../../public/assets/dashboard.png";
import Exclude1 from "../../public/assets/Exclude (1).png";
import Exclude from "../../public/assets/Exclude.png";
import interests from "../../public/assets/interests.png";
import logout from "../../public/assets/logout.png";
import onnow from "../../public/assets/onnow.png";
import person from "../../public/assets/person.png";
import restaurant_menu from "../../public/assets/restaurant_menu.png";
import Shape from "../../public/assets/Shape (Stroke).png";
import switch_account from "../../public/assets/switch_account.png";
import Group131 from "../../public/assets/Group 13.png";
import Group132 from "../../public/assets/Group 13 (1).png";
import Group133 from "../../public/assets/Group 13 (2).png";
import Vector632 from "../../public/assets/Vector 632.png";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const page = () => {
  const data1 = [
    {
      x: 1,
      y: 60,
    },
    {
      x: 5,
      y: 120,
    },
    {
      x: 10,
      y: 200,
    },
    {
      x: 15,
      y: 300,
    },
    {
      x: 20,
      y: 110,
    },
    {
      x: 25,
      y: 70,
    },
  ];
  const data2 = [
    {
      x: 1,
      y: 60,
    },
    {
      x: 5,
      y: 250,
    },
    {
      x: 10,
      y: 200,
    },
    {
      x: 15,
      y: 100,
    },
    {
      x: 20,
      y: 110,
    },
    {
      x: 25,
      y: 70,
    },
  ];
  const minX = Math.min(...data1.map((d) => d.x), ...data2.map((d) => d.x));
  const minY = Math.min(...data1.map((d) => d.y), ...data2.map((d) => d.y));
  const data = {
    labels: [
      "Mirpur",
      "Moghbazar",
      "Banani",
      "Badda",
      "Muhammadpur",
      "Gulshan",
    ],
    datasets: [
      {
        label: "Total Orders",
        data: [92000, 60000, 55000, 65000, 60000, 90000], // Example order data
        backgroundColor: "#ff7043", // Orange color for bars
        borderRadius: 0, // Rounded corners
        barThickness: 23,
      },
    ],
  };
  const dataTable = [
    {
      category: "New",
      orders: 143,
      customers: 125,
      customerPercentage: "10%",
      avgBasket: "89863৳",
      totalSales: "37055৳",
      totalOrderPercentage: "100%",
      acv: "370৳",
    },
    {
      category: "Returning",
      orders: 23,
      customers: 20,
      customerPercentage: "5%",
      avgBasket: "5663৳",
      totalSales: "34870৳",
      totalOrderPercentage: "93%",
      acv: "370৳",
    },
    {
      category: "Total",
      orders: 166,
      customers: 155,
      customerPercentage: "15%",
      avgBasket: "15680৳",
      totalSales: "56970৳",
      totalOrderPercentage: "100%",
      acv: "370৳",
    },
  ];
  const options = {
    indexAxis: "y", // Horizontal bar chart
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 3,
    plugins: {
      legend: { display: false }, // Hide legend
      title: { display: false }, // No title in the chart
      datalabels: {
        color: "#fff", // White text for better contrast
        anchor: "start", // Center-align inside the bar
        align: "end",
        formatter: (value, context) =>
          context.chart.data.labels[context.dataIndex], // Display names (labels)
        font: {
          size: 12, // Font size for the text
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: (value) => `${value.toLocaleString()}৳`, // Add currency symbol
          font: { size: 18 },
          stepSize: 50000,
          color: "#333",
        },
        grid: { display: false },
        max: 200000,
      },
      y: {
        ticks: { display: false }, // Hide y-axis ticks (since names are inside the bars)
        grid: { display: false },
      },
    },
  };
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
      }}
      className="flex bg-[#F8F8F8]"
    >
      {/* nav */}
      <div className="w-[365px] bg-[#FFFFFF]">
        <div className="bg-[#F15B25] w-full">
          <Image
            className="mx-auto py-[1rem] pointer"
            src={onnow}
            alt="onnow"
          />
        </div>
        <div className="mt-[3.5rem] mx-[3.5rem] divide-[#DEDEDE] divide-[2px] divide-y text-[#6F6F6F] text-2xl">
          <div>
            <div className="flex my-[2.5rem] pointer">
              <div>
                <Image src={dashboard} alt="dashboard" />
              </div>
              <div className="ms-[1rem]">
                <p className="text-[#F15B25] font-bold">Dashboard</p>
              </div>
            </div>
            <div className="flex my-[2.5rem] pointer">
              <div>
                <Image src={Exclude} alt="Exclude" />
              </div>
              <div className="ms-[1rem]">
                <p>Live orders</p>
              </div>
            </div>
            <div className="flex my-[2.5rem] pointer">
              <div>
                <Image src={Shape} alt="Shape" />
              </div>
              <div className="ms-[1rem]">
                <p>Inventory</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex my-[2.5rem] pointer">
              <div>
                <Image src={interests} alt="interests" />
              </div>
              <div className="ms-[1rem] grow">
                <p>Brands</p>
              </div>
              <div>
                <Image src={arrow_forward_ios} alt="arrow_forward_ios" />
              </div>
            </div>
            <div className="flex my-[2.5rem] pointer">
              <div>
                <Image src={restaurant_menu} alt="restaurant_menu" />
              </div>
              <div className="ms-[1rem]">
                <p>Menu</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex my-[2.5rem] pointer">
              <div>
                <Image src={switch_account} alt="switch_account" />
              </div>
              <div className="ms-[1rem]">
                <p>Customers</p>
              </div>
            </div>
            <div className="flex my-[2.5rem] pointer">
              <div>
                <Image src={Exclude1} alt="Exclude1" />
              </div>
              <div className="ms-[1rem]">
                <p>Order history</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex my-[2.5rem] pointer">
              <div>
                <Image src={person} alt="person" />
              </div>
              <div className="ms-[1rem]">
                <p>Edit profile</p>
              </div>
            </div>
            <div className="flex my-[2.5rem] pointer">
              <div>
                <Image src={logout} alt="logout" />
              </div>
              <div className="ms-[1rem]">
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[3rem] ms-[3rem]">
        <div className="my-[1rem] flex text-2xl">
          <div className="relative group">
            <button className="bg-[#FFFFFF] hover:bg-[#F15B2525] hover:border-[#F15B25] border text-3xl font-bold h-[89px] w-[319px] rounded-xl">
              All Brands
            </button>
            <div className="hidden group-hover:block triangle ms-[150px]"></div>
          </div>
          <div className="relative group h-fit">
            <button className="flex bg-[#FFFFFF] hover:bg-[#F15B2525] hover:border-[#F15B25] items-center border font-bold h-[89px] w-[319px] rounded-xl ms-[1.5rem]">
              <div className="me-[1rem] ms-[1.5rem]">
                <Image src={Group131} alt="onnow" />
              </div>
              <p>Party Pizza</p>
            </button>
            <div className="hidden group-hover:block triangle ms-[165px]"></div>
          </div>
          <div className="relative group h-fit">
            <button className="flex bg-[#FFFFFF] hover:bg-[#F15B2525] hover:border-[#F15B25] items-center border font-bold h-[89px] w-[319px] rounded-xl ms-[1.5rem]">
              <div className="me-[1rem] ms-[1.5rem]">
                <Image src={Group132} alt="onnow" />
              </div>
              <p>Wrappo</p>
            </button>
            <div className="hidden group-hover:block triangle ms-[165px]"></div>
          </div>
          <div className="relative group h-fit">
            <button className="flex bg-[#FFFFFF] hover:bg-[#F15B2525] hover:border-[#F15B25] items-center border font-bold h-[89px] w-[319px] rounded-xl ms-[1.5rem]">
              <div className="me-[1rem] ms-[1.5rem]">
                <Image src={Group133} alt="onnow" />
              </div>
              <p>Snackmate</p>
            </button>
            <div className="hidden group-hover:block triangle ms-[165px]"></div>
          </div>
          <div className="mt-[1.5rem]">
            <button className="ms-[1rem] bg-[#888888] hover:bg-[#F15B25] rounded-full p-[0.2rem]">
              <Image src={arrow_forward_ios1} alt="arrow" />
            </button>
          </div>
        </div>
        <div className="flex divide-x divide-[#B0B0B0] bg-[#FFFFFF] rounded-xl text-2xl text-[#979797] mt-[3rem] p-[1rem]">
          <div className="w-[20%] p-[1rem]">
            <h1>Total orders</h1>
            <p className="text-[#F15B25] text-4xl font-black mt-[0.5rem]">
              136
            </p>
          </div>
          <div className="w-[26%] flex justify-center p-[1rem]">
            <div>
              <h1>Total sales</h1>
              <p className="text-[#F15B25] text-4xl font-black mt-[0.5rem]">
                32652৳
              </p>
            </div>
          </div>
          <div className="w-[26%] flex justify-center p-[1rem]">
            <div>
              <h1>Dispatched Order</h1>
              <p className="text-[#F15B25] text-4xl font-black mt-[0.5rem]">
                32652৳
              </p>
            </div>
          </div>
          <div className="w-[26%] flex justify-end p-[1rem]">
            <div>
              <h1>Avg. basket value</h1>
              <p className="text-[#F15B25] text-4xl font-black mt-[0.5rem]">
                370৳
              </p>
            </div>
          </div>
        </div>
        {/* graphs */}
        <div className="flex mt-[1.5rem]">
          <div className="bg-[#FFFFFF] p-[1rem] rounded-xl">
            <div>
              <div className="flex items-center">
                <div className="grow ms-[2rem]">
                  <h1 className="text-2xl font-bold">Total orders by source</h1>
                </div>
                <button className="flex items-center border rounded-full px-[1rem]">
                  January{" "}
                  <Image
                    className="mx-auto ms-[1rem] py-[1rem]"
                    src={Vector632}
                    alt="Vector632"
                  />
                </button>
                <button className="flex items-center border rounded-full px-[1rem] ms-[1rem]">
                  Select an outlet{" "}
                  <Image
                    className="mx-auto ms-[1rem] py-[1rem]"
                    src={Vector632}
                    alt="Vector632"
                  />
                </button>
              </div>
              <div
                style={{
                  marginLeft: "30px",
                  height: "3px",
                  width: "180px",
                  backgroundColor: "#ff7043",
                  marginBottom: "20px",
                }}
              ></div>
              <div>
                <div className="flex font-[600] items-center px-[1rem] ms-[1rem]">
                  <div className="bg-[#7BB0FF] w-[1.5rem] h-[1.5rem]"></div>
                  <p className="text-[#7BB0FF] ms-[.5rem]">Web</p>
                  <div className="bg-[#FF569D] w-[1.5rem] h-[1.5rem] ms-[1rem]"></div>
                  <p className="text-[#FF569D] ms-[.5rem]">Mobile</p>
                </div>
              </div>
            </div>
            <div className="pt-[1rem]">
              <LineChart
                width={650}
                height={150}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid vertical={false} strokeDasharray="2 2" />
                <YAxis
                  dataKey="y"
                  domain={["auto", "auto"]}
                  type="number"
                  interval={0}
                  label={{
                    style: { textAnchor: "middle" },
                    angle: -90,
                    position: "left",
                    offset: 0,
                  }}
                  allowDataOverflow={true}
                  strokeWidth={0}
                />
                <XAxis
                  dataKey="x"
                  domain={["auto", "auto"]}
                  interval={0}
                  type="number"
                  label={{
                    key: "xAxisLabel",
                    value: "x",
                    position: "bottom",
                  }}
                  allowDataOverflow={true}
                  strokeWidth={0}
                />
                {minY < 0 && <ReferenceLine y={0} stroke="gray" />}
                {minX < 0 && <ReferenceLine x={0} stroke="gray" />}
                <Line
                  strokeWidth={2}
                  data={data1}
                  dot={false}
                  type="monotone"
                  dataKey="y"
                  stroke="#7BB0FF"
                />
                <Line
                  strokeWidth={2}
                  data={data2}
                  dot={false}
                  type="monotone"
                  dataKey="y"
                  stroke="#FF569D"
                />
              </LineChart>
            </div>
          </div>
          <div className="relative bg-[#FFFFFF] rounded-xl ms-[1rem] p-[1rem] ps-[2rem]">
            <div className="w-[700px] h-[220px]">
              <h2 className="text-2xl font-bold">Total orders by outlet</h2>
              <div
                style={{
                  height: "3px",
                  width: "180px",
                  backgroundColor: "#ff7043",
                  marginBottom: "20px",
                }}
              ></div>
              <Bar data={data} options={options} />
            </div>
            <div className="absolute top-[3rem] right-[3rem]">
              <Image
                className="w-[15px] pointer rotate-180"
                src={Vector632}
                alt="Vector632"
              />
              <Image
                className="mt-[10px] w-[15px] pointer"
                src={Vector632}
                alt="Vector632"
              />
            </div>

            <div className="absolute bg-[#BEBEBE] top-[1.5rem] right-[1.5rem] w-[8px] h-[230px] rounded-full">
              <div className="w-full bg-[#6F6F6F] h-[80px] rounded-full pointer"></div>
            </div>
          </div>
        </div>
        {/* table */}
        <div
          className="mt-[1rem] rounded-xl"
          style={{
            background: "#FFFFFF",
            padding: "20px",
          }}
        >
          <h2 className="text-2xl font-bold">
            New customers X Returning customers
          </h2>
          <div
            style={{
              height: "3px",
              width: "180px",
              backgroundColor: "#ff7043",
              marginBottom: "20px",
            }}
          ></div>
          <table
            className="table-auto"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <thead>
              <tr
                style={{ font: "600", borderRadius: "10px" }}
                className="bg-[#f8f8f8]"
              >
                <th style={{ padding: "10px" }}>Category</th>
                <th style={{ padding: "10px" }}># of orders</th>
                <th style={{ padding: "10px" }}># of customers</th>
                <th style={{ padding: "10px" }}>% of customers</th>
                <th style={{ padding: "10px" }}>Avg. basket</th>
                <th style={{ padding: "10px" }}>Total sales</th>
                <th style={{ padding: "10px" }}>% Total orders</th>
                <th style={{ padding: "10px" }}>ACV</th>
              </tr>
            </thead>
            <tbody className="divide-y font-[600]">
              {dataTable.map((row, index) => (
                <tr key={index}>
                  <td
                    style={{
                      padding: "10px",
                      color:
                        row.category === "New" ||
                        row.category === "Returning" ||
                        row.category === "Total"
                          ? "#ff7043"
                          : "#333",
                    }}
                  >
                    {row.category}
                  </td>
                  <td style={{ padding: "10px" }}>{row.orders}</td>
                  <td style={{ padding: "10px" }}>{row.customers}</td>
                  <td style={{ padding: "10px" }}>{row.customerPercentage}</td>
                  <td style={{ padding: "10px" }}>{row.avgBasket}</td>
                  <td style={{ padding: "10px" }}>{row.totalSales}</td>
                  <td style={{ padding: "10px" }}>
                    {row.totalOrderPercentage}
                  </td>
                  <td style={{ padding: "10px" }}>{row.acv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
