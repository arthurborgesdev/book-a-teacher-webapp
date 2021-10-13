import React, { useEffect } from 'react';
import { useGetBookingsQuery } from '../services/booking';

const Bookings = () => {
  const {
    data,
    error,
    isLoading,
    refetch,
  } = useGetBookingsQuery();

  useEffect(() => {
    refetch();
  }, []);

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
      <h1>My Teachers Bookings</h1>
      {
        data.map((booking) => (
          <div key={booking.id}>
            <h2>
              Name:
              {booking.teacher}
            </h2>
            <img src={booking.professional_photo} alt="People visual understanding of the teacher's appearance" width="400" />
            <p>
              ID:
              {booking.id}
            </p>
            <p>
              City:
              {booking.city}
            </p>
            <p>
              Subject:
              {booking.subject}
            </p>
            <p>
              Booking date:
              {booking.booked_for}
            </p>
          </div>
        ))
      }
    </>
  );
};

export default Bookings;
