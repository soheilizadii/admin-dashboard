import { Tooltip } from "@mui/material";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./single.module.scss";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Single = (props) => {
  return (
    <div className={styles.single}>
      <div className={styles.view}>
        <div className={styles.info}>
          <div className={styles.topInfo}>
            <img src={props.img} alt="" />
            <span>{props.title}</span>
            <button>Update</button>
          </div>
          <div className={styles.details}>
            {Object.entries(props.info).map((item) => {
              return (
                <div className={styles.item}>
                  <span>{item[0]}: </span>
                  <span>{item[1]}</span>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={props.chart.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              {props.chart.dataKeys.map((item) => {
                return (
                  <Line
                    type="monotone"
                    dataKey={item.name}
                    stroke={item.color}
                    activeDot={{ r: 8 }}
                  />
                );
              })}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={styles.activities}>
        <h2 className={styles.title}>Latest Activities</h2>
        <ul>
          {props.activities.map((item) => {
            return (
              <li>
                <div>
                  <p>{item.text}</p>
                  <time>{item.time}</time>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Single;
