import { Card } from "antd";
import { useQuery } from "react-query";

const { Meta } = Card;

const fetchRecipes = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  return res.json();
};

export const RecipeCard = () => {
  const { isLoading, error, data } = useQuery("recipes", fetchRecipes);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const meals = data.meals;

  const mealElements = meals.map((mealData) => {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        key={mealData.idMeal}
        cover={<img alt="example" src={mealData.strMealThumb} />}
      >
        <Meta title={mealData.strMeal} description={mealData.strCategory} />
      </Card>
    );
  });

  return <div>{mealElements}</div>;
};
