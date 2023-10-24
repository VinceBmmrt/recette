import Header from '../Header/Header';
import Ingredients from '../Ingredients/Ingredients';
import Instructions from '../Instructions/Instructions';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Ingredients />
      <Instructions />
    </div>
  );
}

export default App;
