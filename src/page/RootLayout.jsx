import { Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";

export const RootLayout = () => {
  return (
    <main className={styles.main}>
      <Outlet />
      {/* <Space
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        direction="vertical"
      >
        <SearchRecipes onSearch={setSearchValue} />
        <RecipeCard className="recipe-card" />
      </Space> */}
    </main>
  );
};
