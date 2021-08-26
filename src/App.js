
import './App.css';
import Nav from './components/nav/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Tasks from './components/tasks/Tasks';
import { UserProvider } from './context/UserContext'
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import ChangePassword from './components/auth/ChangePassword';
function App() {
  return (


    <Router>
      <UserProvider className="App">
        <Nav />
        <Switch>

          <Route path="/" exact component={Tasks} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/sign-in" exact component={SignIn} />
          <Route path="/change-password" exact component={ChangePassword} />
          <Route path="/change-password" exact component={ChangePassword} />
        </Switch>
      </UserProvider>

    </Router>

  );
}

export default App;
