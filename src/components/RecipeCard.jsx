import { Card } from "antd";

const { Meta } = Card;

export const RecipeCard = ({ recipes }) => {
  const meals = recipes.meals;

  if (meals === null) return <div>No Results Found</div>;

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
