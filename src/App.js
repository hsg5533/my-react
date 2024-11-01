import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} exact={true} />
      <Route path="/contact" component={Contact} exact={true} />
    </BrowserRouter>
  );
}

export default App;
