import * as React from 'react';
import {
  useEffect,
} from 'react';
import {
  Link,
  useRouteMatch,
} from 'react-router-dom';
import './carousel.css';
import { Carousel } from 'react-responsive-carousel';
import { useGetTeachersQuery } from '../services/teacher';

import style from './main.module.scss';

const Main = () => {
  const {
    data: teachers,
    error,
    isLoading,
    refetch,
  } = useGetTeachersQuery();

  useEffect(() => {
    refetch();
  }, []);

  const { url } = useRouteMatch();

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

  function teachersList(teachers) {
    // eslint-disable-next-line no-nested-ternary
    const divider = window.innerWidth < 1580 ? (window.innerWidth < 1150 ? 1 : 2) : 3;
    const teachersBlockList = [];
    let teachersBlock = [];
    for (let i = 0; i < teachers.length; i += 1) {
      teachersBlock.push(
        <div key={teachers[i].id}>
          <div
            style={backgroundStyling(teachers[i].professional_photo)}
            className={style.teacherImage}
          />
          <br />
          <h2>{teachers[i].name}</h2>
          <br />
          <p>
            {teachers[i].name}
            {' '}
            is willing to teach you about
            {' '}
            {teachers[i].subject}
          </p>
          <br />
          <Link
            key={teachers[i].id}
            href="/#"
            to={`${url}teachers/${teachers[i].id}`}
          >
            See details
          </Link>
        </div>,
      );
      if ((i + 1) % divider === 0) {
        teachersBlockList.push(teachersBlock);
        teachersBlock = [];
      }
    }
    if (teachers.length > 0) {
      teachersBlockList.push(teachersBlock);
    }
    const carouselBlocks = [];
    teachersBlockList.forEach((block) => {
      carouselBlocks.push(
        <div>{block}</div>,
      );
    });
    return <Carousel className={style.carousel}>{carouselBlocks}</Carousel>;
  }

  return (
    <div className={style.container}>
      <h1>OUR TEACHERS</h1>
      <p>Pick one of our Teachers to Start Learning!</p>
      <div>
        {teachersList(teachers)}
      </div>
    </div>
  );
};

export default Main;
