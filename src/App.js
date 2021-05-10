import "./App.css";
import { Provider } from "react-redux";
import Pokedex from "./components/Pokedex";
import store from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <Pokedex />
    </Provider>
  );
}

export default App;
