import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetTeachersQuery } from '../services/teacher';
import { useGetCitiesQuery } from '../services/dropdown';
import { getFromLocalStorage } from '../scripts/storage';
import { useAddNewBookingMutation } from '../services/booking';

const AddBooking = ({ teacherFromDetails }) => {
  const [teacher, setTeacher] = useState('');
  const [city, setCity] = useState('');
  const [bookedDate, setBookedDate] = useState('');
  const [savedStatus, setSavedStatus] = useState(['off']);
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    if (teacherFromDetails) {
      setTeacher(teacherFromDetails);
    } else {
      setTeacher('');
    }
  }, []);

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
    teacherFromDetails ? (
      <input
        type="text"
        value={teachers.filter((teacher) => teacher.id === teacherFromDetails)[0]}
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
    <div>
      <h1>Add Booking page</h1>
      <form onSubmit={onFormSubmit}>
        Teacher name:
        <ChooseTeacherOrNot />
        <br />
        <br />
        City:
        <select value={city} onChange={onCityChange} required>
          <option value="">Select a City</option>
          { cities.map((city) => (
            <option key={city.id} value={city.id}>{city.name}</option>
          ))}
        </select>
        <br />
        <br />
        Book date:
        <input type="date" value={bookedDate} onChange={onBookedDateChange} required />
        <br />
        <br />
        <input type="submit" value="Send" />
        <Message />
      </form>
    </div>
  );
};

AddBooking.defaultProps = {
  teacherFromDetails: '',
};

AddBooking.propTypes = {
  teacherFromDetails: PropTypes.number,
};

export default AddBooking;
