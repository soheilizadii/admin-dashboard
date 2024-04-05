import { Link } from "react-router-dom";
import styles from "./menu.module.scss";
import { menu } from "../../config/data";

import * as IoIcons from "react-icons/io5";
import * as fi from "react-icons/fi";
import * as bs from "react-icons/bs";
import * as lu from "react-icons/lu";
import * as fa from "react-icons/fa";
import * as md from "react-icons/md";
import * as tb from "react-icons/tb";
import * as sl from "react-icons/sl";
import * as gr from "react-icons/gr";
const Menu = () => {
  const iconLibraries = {
    IoIcons: IoIcons,
    fi: fi,
    bs: bs,
    lu: lu,
    fa: fa,
    md: md,
    tb: tb,
    sl: sl,
    gr: gr,
  };
  return (
    <div className={styles.container}>
      {menu.map((item) => (
        <div className={styles.items} key={item.id}>
          <span className={styles.title}>{item.title}</span>
          {item.listItems
            .filter((i) => i.title !== "Profile")
            .map((list) => {
              const IconComponent = iconLibraries[list.icon.library]
                ? iconLibraries[list.icon.library][list.icon.name]
                : null;

              return (
                <Link to={list.url} className={styles.action} key={list.id}>
                  {IconComponent ? <IconComponent /> : null}
                  <span className={styles.listItemsTitle}>{list.title}</span>
                </Link>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
