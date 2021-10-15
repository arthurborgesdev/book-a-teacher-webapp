import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import ProvideAuth from './components/authentication/ProvideAuth';
import PrivateRoute from './components/authentication/PrivateRoute';

import Login from './components/Login';
import Main from './components/Main';
import TeacherDetails from './components/TeacherDetails';
import AddTeacher from './components/AddTeacher';
import AddBooking from './components/AddBooking';
import Bookings from './components/Bookings';
import DeleteTeacher from './components/DeleteTeacher';
import NoMatch from './components/authentication/NoMatch';
import NavigationPanel from './components/NavigationPanel';

import { useGetTeachersQuery } from './services/teacher';

import style from './app.module.scss';

const App = () => {
  const { data, error, isLoading } = useGetTeachersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Oops, this error occured:
        {error}
      </div>
    );
  }

  const teacherRoutes = data.map((teacher) => (
    <PrivateRoute key={teacher.id} exact path={`/teachers/${teacher.id}`}>
      <TeacherDetails identifier={teacher.id} />
    </PrivateRoute>
  ));

  return (
    <ProvideAuth className={style.container}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          { teacherRoutes }
          <PrivateRoute exact path="/teachers/new">
            <NavigationPanel />
            <AddTeacher />
          </PrivateRoute>
          <PrivateRoute exact path="/bookings">
            <NavigationPanel />
            <Bookings />
          </PrivateRoute>
          <PrivateRoute exact path="/teachers/delete">
            <NavigationPanel />
            <DeleteTeacher />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <NavigationPanel />
            <Main />
          </PrivateRoute>
          <PrivateRoute exact path="/bookings/new/">
            <NavigationPanel />
            <AddBooking />
          </PrivateRoute>
          <PrivateRoute path="/bookings/new/:id">
            <NavigationPanel />
            <AddBooking />
          </PrivateRoute>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
};

export default App;
