import ListaPeliculas from "./components/ListaPeliculas/ListaPeliculas";
import "./App.css"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import Personajes from "./screens/Personajes/Personajes";
import NotFound from "./screens/NotFound/NotFound";
import Personaje from "./screens/Personaje/Personaje";


function App() {
  
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/personajes" component={Personajes}/>
      <Route path="/personaje/:id" component={Personaje}/>
      <Route path="" component={NotFound}/>
    </Switch>
  );
}

export default App;
