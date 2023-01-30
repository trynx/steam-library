import { Checkbox, Col, Image, List, Row, Space } from "antd";
import _ from "lodash";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styles from "./RecipeInfo.module.css";

const getMealIngredients = (meal) => {
  const ingredients = [];
  let currIngredientIndex = 1;

  while (true) {
    let ingredient = meal[`strIngredient${currIngredientIndex}`];

    if (!ingredient) {
      break;
    }

    ingredient = _.capitalize(ingredient);

    const measure = meal[`strMeasure${currIngredientIndex}`] ?? "";

    const fullIngredient = ingredient + (measure ? `: ${measure}` : "");

    ingredients.push(fullIngredient);
    currIngredientIndex++;
  }

  return ingredients;
};

export const RecipeInfo = () => {
  const { recipeId } = useParams();

  const fetchRecipes = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;

    const res = await fetch(url);
    return res.json();
  };

  const { isLoading, error, data } = useQuery(
    ["recipe", recipeId],
    fetchRecipes
  );

  if (isLoading) return <h3>Is loading...</h3>;

  if (error) return <h1>Had an error retreiving the recipe :(</h1>;

  const meal = data.meals[0];

  const ingredientsList = getMealIngredients(meal);

  return (
    <Space direction="vertical" className={styles.info}>
      <h1>{meal.strMeal}</h1>
      <Row>
        <Col flex="auto">
          <h3>Ingredients</h3>
          <List
            dataSource={ingredientsList}
            renderItem={(item) => (
              <List.Item>
                <Checkbox>{item}</Checkbox>
              </List.Item>
            )}
            split={false}
          />
        </Col>

        <Col>
          <Image
            width={400}
            src={meal.strMealThumb ?? ""}
            fallback={"TODO Fallback image"}
            alt="An image of the final result of the recipe"
          />
        </Col>
      </Row>
      <Space wrap={true}>
        <h3>Instructions</h3>
        <br />
        {meal.strInstructions}
      </Space>
    </Space>
  );
};
