import * as React from 'react';
// import { useSelector } from 'react-redux';
import { useGetTeachersQuery } from '../services/teacher';

const Main = () => {
  const { data, error, isLoading } = useGetTeachersQuery();
  // const teachers = useSelector((state) => state.teacher);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops, an error occured</div>;
  }
  return (
    <>
      <h1>This is main page!</h1>
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
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Main;
