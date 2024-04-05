import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./pieChartBox.module.scss";

const PieChartBox = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.pieChartBox}>
      <h1>Leads By Source</h1>
      <div className={styles.chart}>
        <ResponsiveContainer>
          <PieChart width="99%" height={300}>
            <Tooltip></Tooltip>
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              fill="#8884d8"
              paddingAngle={5}
              dataKey={data.value}
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.options}>
        {data.map((item) => {
          return (
            <div className={styles.option}>
              <div className={styles.title}>
                <div
                  className={styles.dot}
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.name}</span>
              </div>
              <span>{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChartBox;
