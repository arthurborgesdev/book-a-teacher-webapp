import React from 'react';
import { useGetBookingsQuery } from '../services/booking';

const Bookings = () => {
  const { data, error, isLoading } = useGetBookingsQuery();

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
      <h2>
        Name:
        {data.teacher}
      </h2>
      <img src={data.professional_photo} alt="People visual understanding of the teacher's appearance" width="400" />
      <p>
        ID:
        {data.id}
      </p>
      <p>
        City:
        {data.city}
      </p>
      <p>
        Subject id:
        {data.subject}
      </p>
    </>
  );
};

export default Bookings;
