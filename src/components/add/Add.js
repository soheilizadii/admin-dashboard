import styles from "./add.module.scss";
const Add = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.add}>
        <h3>add new {props.slug} </h3>
        <div className={styles.close} onClick={() => props.setOpen(false)}>
          X
        </div>
        <form>
          {props.columns
            .filter(
              (p) =>
                p.field !== "id" &&
                p.field !== "img" &&
                p.field !== "actions" &&
                p.field !== "avatar"
            )
            .map((item) => {
              return (
                <div className={styles.item}>
                  <label>{item.headerName}</label>
                  <input type="text" />
                </div>
              );
            })}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
