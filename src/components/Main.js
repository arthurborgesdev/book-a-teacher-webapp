import React from 'react';
import { useSelector } from 'react-redux';

const Main = () => {
  const teachers = useSelector((state) => state.teacher)

  return (
    <>
      <h1>This is main page!</h1>
      <div>
        {
          teachers.map((teacher) => 
          <div>
            <p>Teacher ID: {teacher.id}</p>
            <p>Teacher Name: {teacher.name}</p>
            <p>Teacher Subject: {teacher.subject}</p>
          </div>
          )
        }
      </div>
    </>
  );  
};  

export default Main;
