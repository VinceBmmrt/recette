import './Ingredients.scss';

type Ingredient = {
  id: number;
  quantity: number;
  unit: string;
  name: string;
};

type IngredientsProps = {
  ingredients: Ingredient[];
};

function Ingredients({ ingredients }: IngredientsProps) {
  return (
    <ul className="ingredients">
      {ingredients.map((ingredient) => (
        <li className="ingredients__item" key={ingredient.id}>
          <span className="ingredients__item-quantity">
            {ingredient.quantity} {ingredient.unit}
          </span>
          <span>{ingredient.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Ingredients;
