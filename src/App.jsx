import "./App.css";
import Menu from "./Components/Menu";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Menu />
      </Provider>
    </>
  );
}

export default App;
