import { Space } from "antd";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { RecipeCard } from "../components/RecipeCard";
import { SearchRecipes } from "../components/SearchRecipes";

export const MainPage = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  let url;
  const fetchRecipes = async () => {
    searchValue
      ? (url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      : (url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`); // Just a place holder before filltering via search bar

    const res = await fetch(url);
    return res.json();
  };

  const { isLoading, error, data } = useQuery(
    ["recipes", searchValue],
    fetchRecipes
  );

  const showRecipeHandler = (mealData) => {
    navigate(`/recipe-info/${mealData.idMeal}`);
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Space direction="vertical">
      <SearchRecipes onSearch={setSearchValue} />
      <RecipeCard recipes={data} onClick={showRecipeHandler} />
    </Space>
  );
};
