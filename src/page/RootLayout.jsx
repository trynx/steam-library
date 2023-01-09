import { Space } from "antd";
import { useState } from "react";
import { SearchRecipes } from "../components/SearchRecipes";

export const RootLayout = () => {
  const [searchValue, setSearchValue] = useState("");

  console.log("Search:", searchValue);

  return (
    <main>
      <Space direction="vertical">
        <SearchRecipes onSearch={setSearchValue} />
        {/* TODO: Vlad add your component here */}
      </Space>
    </main>
  );
};
