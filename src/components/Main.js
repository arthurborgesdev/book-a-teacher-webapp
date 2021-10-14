import * as React from 'react';
import {
  useEffect,
} from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { useGetTeachersQuery } from '../services/teacher';

import NavigationPanel from './NavigationPanel';

const Main = () => {
  const {
    data: teachers,
    error,
    isLoading,
    refetch,
  } = useGetTeachersQuery();

  useEffect(() => {
    refetch();
  }, []);

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
      <NavigationPanel />
      <div>
        {
          teachers.map((teacher) => (
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
