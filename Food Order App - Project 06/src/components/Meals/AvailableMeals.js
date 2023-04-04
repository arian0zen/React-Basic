import React, { useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
const fetchMeals = async () => {
  const response = await fetch('https://learn-react001-default-rtdb.firebaseio.com/AvailableMeals.json');
  const responseData = await response.json();
  return responseData;
}

const AvailableMeals = (props) => {
  const [meals, setMeals] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [httpError, setHttpError] = React.useState();
  useEffect(()=>{
    const availableMeals = fetchMeals();
    availableMeals.then((data) => {
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: data[key].id,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    });
  }, []);
  if(isLoading){
    return <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>
  };
  const mealList = meals.map((meals) => {
    return (
      <MealItem
        key={meals.id}
        id={meals.id}
        name={meals.name}
        description={meals.description}
        price={meals.price}
      />
    );
  });
  return (
    <section className={classes.meals}>
      <Card>
        {!isLoading && <ul>{mealList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
