import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path='/login'>
            <Login/>
          </Route>

           {/* link checkout */}
           <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
           {/* end link checkout */}

          {/* link home page */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
           {/* end link home page */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
