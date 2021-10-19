import * as React from 'react';
import {
  Link,
  NavLink,
  useHistory,
} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faGooglePlus, faVimeo, faPinterestP,
} from '@fortawesome/free-brands-svg-icons';

import { useAuth } from './authentication/ProvideAuth';

import style from './navigationPanel.module.scss';

const NavigationPanel = () => {
  const history = useHistory();
  const auth = useAuth();

  return (
    <nav className={style.container}>
      <img src="https://i.imgur.com/LWIomzF.png" alt="Our Logo" />
      <ul>
        <li>
          <NavLink to="/" exact activeClassName={style.active}>
            Meet our Teachers
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/teachers/new"
            activeClassName={style.active}
          >
            Add Teacher
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/bookings/new" activeClassName={style.active}>Book a Teacher</NavLink>
        </li>
        <li>
          <NavLink exact to="/bookings" activeClassName={style.active}>My bookings</NavLink>
        </li>
        <li>
          <NavLink exact to="/teachers/delete" activeClassName={style.active}>Delete Teacher</NavLink>
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
          <Link to="https://www.twitter.com" className={style.socialButton}>
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </Link>
          <Link to="https://www.facebook.com" className={style.socialButton}>
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </Link>
          <Link to="https://www.google.com" className={style.socialButton}>
            <FontAwesomeIcon icon={faGooglePlus} size="lg" />
          </Link>
          <Link to="https://www.vimeo.com" className={style.socialButton}>
            <FontAwesomeIcon icon={faVimeo} size="lg" />
          </Link>
          <Link to="https://www.pinterest.com" className={style.socialButton}>
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
