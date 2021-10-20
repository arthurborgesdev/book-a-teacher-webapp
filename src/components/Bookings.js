import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useGetBookingsQuery, useRemoveBookingMutation } from '../services/booking';

import style from './listItem.module.scss';

const Bookings = () => {
  const {
    data,
    error,
    isLoading,
  } = useGetBookingsQuery();

  const [
    removeBooking,
  ] = useRemoveBookingMutation();

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
    <div className={style.pageBackground}>
      <div className={style.container}>
        <h1>My Bookings</h1>
        <br />
        {
          data.map((booking) => (
            <div key={booking.id}>
              <div
                style={backgroundStyling(booking.professional_photo)}
                className={style.teacherImage}
              />
              <p><b>{booking.teacher}</b></p>
              <p>{booking.city}</p>
              <p>{booking.subject}</p>
              <p>{booking.booked_for}</p>
              <button type="button" onClick={() => removeBooking(booking.id)}>
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Bookings;
