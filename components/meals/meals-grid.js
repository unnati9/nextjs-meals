import MealItem from "./meal-item";
import cssClasses from "./meals-grid.module.css";

export default function MealsGrid({meals}) {
    return (
        <ul className={cssClasses.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}