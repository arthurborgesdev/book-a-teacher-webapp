import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetTeachersQuery } from '../services/teacher';
import { useGetCitiesQuery } from '../services/dropdown';
import { getFromLocalStorage } from '../scripts/storage';
import { useAddNewBookingMutation } from '../services/booking';

import style from './form.module.scss';

const AddBooking = () => {
  const [teacher, setTeacher] = useState('');
  const [city, setCity] = useState('');
  const [bookedDate, setBookedDate] = useState('');
  const [savedStatus, setSavedStatus] = useState(['off']);
  const [errorMessages, setErrorMessages] = useState([]);

  const { id: teacherId } = useParams();

  const onTeacherChange = (e) => setTeacher(e.target.value);
  const onCityChange = (e) => setCity(e.target.value);
  const onBookedDateChange = (e) => setBookedDate(e.target.value);

  const { data: teachers, error: teacherError, isLoading: teacherLoading } = useGetTeachersQuery();
  const { data: cities, error: cityError, isLoading: cityLoading } = useGetCitiesQuery();
  const [addNewBooking, { isLoading }] = useAddNewBookingMutation();

  const saveErrorMessages = (errors) => {
    const errorsToSave = Object.entries(errors).map((err) => `${err[0]}: ${err[1]}`);
    setErrorMessages(errorsToSave);
  };

  useEffect(() => {
    if (teacherId) {
      setTeacher(teacherId);
    }
  }, []);

  const canSave = [
    teacher,
    city,
    bookedDate,
  ].every(Boolean) && !isLoading;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        const formData = new FormData();
        formData.append('username', getFromLocalStorage());
        formData.append('teacher_id', teacher);
        formData.append('city_id', city);
        formData.append('booked_for', bookedDate);
        await addNewBooking(formData).unwrap();
        setTeacher('');
        setCity('');
        setBookedDate('');
        setSavedStatus(['saved']);
        e.target.reset();
      } catch (err) {
        const errors = err.data.error;
        saveErrorMessages(errors);
        setSavedStatus(['error']);
      }
    }
  };

  const Message = () => {
    switch (savedStatus[0]) {
      case 'saved':
        return <p>Created sucessfully!</p>;
      case 'error':
        return (
          <div>
            This error occurred:
            { errorMessages.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        );
      default:
        return <p />;
    }
  };

  if (isLoading || teacherLoading || cityLoading) {
    return <div>Loading...</div>;
  }
  if (teacherError) {
    return (
      <div>
        Oops, this error occured:
        {teacherError}
      </div>
    );
  }

  if (cityError) {
    return (
      <div>
        Oops, this error occured:
        {cityError}
      </div>
    );
  }

  const ChooseTeacherOrNot = () => (
    teacherId ? (
      <input
        type="text"
        value={teachers.filter((teacher) => teacher.id === Number(teacherId))[0].name}
        disabled
      />
    ) : (
      <select value={teacher} onChange={onTeacherChange} required>
        <option value="">Select a Teacher</option>
        { teachers.map((teacher) => (
          <option key={teacher.id} value={teacher.id}>{teacher.name}</option>
        ))}
      </select>
    )
  );

  return (
    <form onSubmit={onFormSubmit} className={style.container}>
      <h1>Book a time with a Teacher</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur neque lectus, fringilla dignissim imperdiet sit amet, malesuada et tellus.
        Phasellus vehicula orci in semper aliquam. Nunc elit ipsum,
        mattis sed aliquam sit amet, rhoncus vel lorem.
        Aenean vitae feugiat nulla. Proin sollicitudin porttitor cursus.
        Nunc in tempor diam. Nullam sed convallis dui.
      </p>

      <div>
        <ChooseTeacherOrNot />

        <select value={city} onChange={onCityChange} required>
          <option value="">Select a City</option>
          { cities.map((city) => (
            <option key={city.id} value={city.id}>{city.name}</option>
          ))}
        </select>

        <input type="date" value={bookedDate} onChange={onBookedDateChange} required />

        <input type="submit" value="Send" />
        <Message />
      </div>
    </form>
  );
};

export default AddBooking;
