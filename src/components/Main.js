import * as React from 'react';
import {
  useEffect,
} from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { useGetTeachersQuery } from '../services/teacher';

import style from './main.module.scss';

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

  const backgroundStyling = (url) => (
    {
      background: `url('${url}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  );

  return (
    <div className={style.container}>
      <h1>OUR TEACHERS</h1>
      <p>Pick one of our Teachers to Start Learning!</p>
      <div>
        {
          teachers.map((teacher) => (
            <div key={teacher.id}>
              <div
                style={backgroundStyling(teacher.professional_photo)}
                className={style.teacherImage}
              />
              <br />
              <h2>{teacher.name}</h2>
              <br />
              <p>
                {teacher.name}
                {' '}
                is willing to teach you about
                {' '}
                {teacher.subject}
              </p>
              <br />
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
    </div>
  );
};

export default Main;
