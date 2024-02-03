import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from 'classnames'
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";
import { useDispatch ,useSelector} from "react-redux";
import { menuItemClick, actionItemClick} from "@/slice/menuSlice";
import { MENU_ITEMS } from "@/constants";

const Menu = () => {
  const dispatch = useDispatch()
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
  const handleMenuClick = (itemName) => {
      dispatch(menuItemClick(itemName))
  }
  return (
    <div className={styles.menuContainer}>
      <div className={cx(styles.wrapper , {[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL})} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div className={cx(styles.wrapper , {[styles.active]: activeMenuItem === MENU_ITEMS.ERASER})} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}>
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div className={styles.wrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon}/>
      </div>
      <div className={styles.wrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div className={styles.wrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
