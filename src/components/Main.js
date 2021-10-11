import * as React from 'react';
import {
  Link,
  NavLink,
  useRouteMatch,
} from 'react-router-dom';
import { useGetTeachersQuery } from '../services/teacher';

const Main = () => {
  const { data, error, isLoading } = useGetTeachersQuery();

  const { url } = useRouteMatch();

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

  return (
    <>
      <h1>This is main page!</h1>
      <nav>
        <NavLink to={`${url}teachers/new`}>Add Teacher</NavLink>
      </nav>
      <div>
        {
          data.map((teacher) => (
            <div key={teacher.id}>
              <p>
                Teacher ID:
                {teacher.id}
              </p>
              <p>
                Teacher Name:
                {teacher.name}
              </p>
              <p>
                Teacher Subject:
                {teacher.subject}
              </p>
              <Link
                key={teacher.id}
                href="/#"
                to={`${url}teachers/${teacher.id}`}
              >
                See details
              </Link>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Main;
