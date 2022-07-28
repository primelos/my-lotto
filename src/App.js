import "./App.css";
import Lotto from "./components/lotto";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage";
import Mega from "./components/mega";
import Power from "./components/power";
import RandomGame from "./components/randomGame";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/lotto" component={Lotto} />
        <Route exact path="/mega" component={Mega} />
        <Route exact path="/power" component={Power} />
        <Route exact path="/random" component={RandomGame} />
      </Switch>
    </div>
  );
}

export default App;
