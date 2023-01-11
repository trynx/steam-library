import { Space } from "antd";
import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { SearchRecipes } from "../components/SearchRecipes";
import styles from "./RootLayout.module.css";

export const RootLayout = () => {
  const [searchValue, setSearchValue] = useState("");

  console.log("Search:", searchValue);

  return (
    <main className={styles.main}>
      <Space direction="vertical">
        <SearchRecipes onSearch={setSearchValue} />
        <RecipeCard />
      </Space>
    </main>
  );
};
