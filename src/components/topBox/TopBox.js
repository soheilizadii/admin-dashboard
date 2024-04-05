import styles from "./topBox.module.scss";
import { topDealUsers } from "../../config/data";
const TopBox = () => {
  return (
    <div className={styles.TopBox}>
      <h3>Top Deals</h3>
      {topDealUsers.map((item) => {
        return (
          <div className={styles.items} key={item.id}>
            <div className={styles.user}>
              <img src={item.img} />
              <div className={styles.info}>
                <span>{item.username}</span>
                <span>{item.email}</span>
              </div>
            </div>
            <span className={styles.amount}>${item.amount}</span>
          </div>
        );
      })}
    </div>
  );
};

export default TopBox;
