import React from 'react';
import { useGetBookingsQuery, useRemoveBookingMutation } from '../services/booking';

const Bookings = () => {
  const {
    data,
    error,
    isLoading,
  } = useGetBookingsQuery();

  const [
    removeBooking,
    { isLoading: removeBookingIsLoading },
  ] = useRemoveBookingMutation();

  if (isLoading || removeBookingIsLoading) {
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
            <button type="button" onClick={() => removeBooking(booking.id)}>Remove</button>
          </div>
        ))
      }
    </>
  );
};

export default Bookings;
