import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage";
import { JobState } from "./context/jobContext/jobContext";
import { UserState } from "./context/userContext/userContext";
import "./App.css";
const App = () => {
  return (
    <UserState>
      <JobState>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/jobs" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
        </Router>
      </JobState>
    </UserState>
  );
};

export default App;
