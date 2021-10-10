import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';
import TeacherDetails from './components/TeacherDetails';

import { useGetTeachersQuery } from './services/teacher';

const App = () => {
  const { data, error, isLoading } = useGetTeachersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops, an error occured</div>;
  }

  const teacherRoutes = data.map((teacher) => (
    <Route key={teacher.id} path={`/teachers/${teacher.id}`}>
      <TeacherDetails name={teacher.name} />
    </Route>
  ));

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        { teacherRoutes }
      </Switch>
    </Router>
  );
};

export default App;
