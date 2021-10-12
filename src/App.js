import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './components/Login';
import Main from './components/Main';
import TeacherDetails from './components/TeacherDetails';
import AddTeacher from './components/AddTeacher';
import AddBooking from './components/AddBooking';
import Bookings from './components/Bookings';

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
    <Route key={teacher.id} exact path={`/teachers/${teacher.id}`}>
      <TeacherDetails identifier={teacher.id} />
    </Route>
  ));

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        { teacherRoutes }
        <Route exact path="/teachers/new">
          <AddTeacher />
        </Route>
        <Route exact path="/bookings/new">
          <AddBooking />
        </Route>
        <Route exact path="/bookings">
          <Bookings />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
