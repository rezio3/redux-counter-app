import { Provider } from "react-redux";
import "./App.css";
import AddButtonsSection from "./components/AddButtonsSection";
import Header from "./components/Header";
import ResultSection from "./components/ResultSection";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header txt={"Calculate saver"} />
        <AddButtonsSection />
        <div className="divider" />
        <ResultSection />
      </div>
    </Provider>
  );
}

export default App;
