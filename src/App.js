import './App.css';
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
import Logout from './components/authentication/Logout';

import { useGetTeachersQuery } from './services/teacher';

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
      <Logout />
      <TeacherDetails identifier={teacher.id} />
    </PrivateRoute>
  ));

  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          { teacherRoutes }
          <PrivateRoute exact path="/teachers/new">
            <Logout />
            <AddTeacher />
          </PrivateRoute>
          <PrivateRoute exact path="/bookings">
            <Logout />
            <Bookings />
          </PrivateRoute>
          <PrivateRoute exact path="/teachers/delete">
            <Logout />
            <DeleteTeacher />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <Logout />
            <Main />
          </PrivateRoute>
          <PrivateRoute exact path="/bookings/new/">
            <Logout />
            <AddBooking />
          </PrivateRoute>
          <PrivateRoute path="/bookings/new/:id">
            <Logout />
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
