import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';

const teacherRoutes = teachers.map((teacher) => (
  <Route key={teacher.id} path={`/teachers/${teacher.id}`}>
    <TeacherDetails name={teacher.name} />
  </Route>
));

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Main />
        </Route>
        { teacherRoutes }
      </Switch>
    </Router>
  );
}

export default App;
