import { Card } from "antd";
import { useQuery } from "react-query";

const { Meta } = Card;

const fetchRecipes = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );
  return res.json();
};

export const RecipeCard = () => {
  const { isLoading, error, data } = useQuery("recipes", fetchRecipes);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={data.meals[0].strMealThumb} />}
    >
      <Meta
        title={data.meals[0].strMeal}
        description={data.meals[0].strCategory}
      />
    </Card>
  );
};
