import DashboardMenu from "./DashboardMenu";
import Profile from "./Profile";
import styles from "/styles/Dashboard.module.css";
const LayoutDashboard = ({ children }) => {
  return (
    <>
      <div className={styles.dashboard__Wrapper}>
        <DashboardMenu />
        {children}
        <Profile />
      </div>
    </>
  );
};

export default LayoutDashboard;
