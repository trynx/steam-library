import { Outlet } from "react-router-dom";
import { MainNavigation } from "../components/MainNavigation";
import styles from "./RootLayout.module.css";

export const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
