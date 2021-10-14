import * as React from 'react';
import {
  NavLink,
  useRouteMatch,
} from 'react-router-dom';

import style from './navigationPanel.module.scss';

const NavigationPanel = () => {
  const { url } = useRouteMatch();

  return (
    <nav className={style.container}>
      <ul>
        <li>
          <NavLink to={`${url}`}>Meet our Teachers</NavLink>
        </li>
        <li>
          <NavLink to={`${url}teachers/new`}>Add Teacher</NavLink>
        </li>
        <li>
          <NavLink to={`${url}bookings/new`}>Book a Teacher</NavLink>
        </li>
        <li>
          <NavLink to={`${url}bookings`}>My bookings</NavLink>
        </li>
        <li>
          <NavLink to={`${url}teachers/delete`}>Delete Teacher</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPanel;
