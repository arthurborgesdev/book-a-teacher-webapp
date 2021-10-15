import * as React from 'react';
import {
  Link,
  NavLink,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faGooglePlus, faVimeo, faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

import { useAuth } from './authentication/ProvideAuth';

import style from './navigationPanel.module.scss';

const NavigationPanel = () => {
  const { path } = useRouteMatch();

  const history = useHistory();
  const auth = useAuth();

  return (
    <nav className={style.container}>
      <img src="https://i.imgur.com/LWIomzF.png" alt="Our Logo" />
      <ul>
        <li>
          <NavLink to={`${path}`} activeClassName={style.active}>
            Meet our Teachers
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`${path}teachers/new`}
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Add Teacher
          </NavLink>
        </li>
        <li>
          <NavLink to={`${path}bookings/new`}>Book a Teacher</NavLink>
        </li>
        <li>
          <NavLink to={`${path}bookings`}>My bookings</NavLink>
        </li>
        <li>
          <NavLink to={`${path}teachers/delete`}>Delete Teacher</NavLink>
        </li>
        <li>
          {auth.user && (
            <button
              type="button"
              onClick={() => {
                auth.signout(() => history.push('/login'));
              }}
            >
              Sign out
            </button>
          )}
        </li>
      </ul>

      <div className={style.socialMediaBlock}>
        <div>
          <Link to="https://www.twitter.com">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </Link>
          <Link to="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </Link>
          <Link to="https://www.google.com">
            <FontAwesomeIcon icon={faGooglePlus} size="lg" />
          </Link>
          <Link to="https://www.vimeo.com">
            <FontAwesomeIcon icon={faVimeo} size="lg" />
          </Link>
          <Link to="https://www.pinterest.com">
            <FontAwesomeIcon icon={faPinterestP} size="lg" />
          </Link>
        </div>
        <br />
        <span>© PIAGGIO & C.S.P.A - PIVA</span>
      </div>
    </nav>
  );
};

export default NavigationPanel;
