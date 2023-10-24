import Header from '../Header/Header';
import Ingredients from '../Ingredients/Ingredients';
import Instructions from '../Instructions/Instructions';
import './App.scss';

import recipeData from '../../data/recipe';

function App() {
  console.log(recipeData);
  return (
    <div className="app">
      {/* Étape 3 : passé les propriétés exiger par le composant */}
      <Header
        title={recipeData.title}
        author={recipeData.author}
        difficulty={recipeData.difficulty}
        thumbnail={recipeData.thumbnail}
      />
      <Ingredients ingredients={recipeData.ingredients} />
      <Instructions />
    </div>
  );
}

export default App;
