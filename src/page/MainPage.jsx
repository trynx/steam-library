import { Space } from "antd";
import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { SearchRecipes } from "../components/SearchRecipes";
// import styles from "./MainPage.module.css";

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");

  console.log("Search:", searchValue);

  return (
    <Space direction="vertical">
      <SearchRecipes onSearch={setSearchValue} />
      <RecipeCard />
    </Space>
  );
};
