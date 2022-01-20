// @flow
import * as React from 'react';
import "../css/challenge.css"

type Props = {
  img: string,
  description: string,
  title: string,
  students: number|string,
  hours: number|string,
  courses: Array<{ img: string, name: string, link: string }>,
  join: () => mixed,
  leave: () => mixed,
};

export const Challenge = ({
  img,
  description,
  title,
  students,
  hours,
  courses,
  join,
  leave,
}: Props): React.Node => {
  return (
    <div className="challenge">
      <div className="challenge--body">
        <div className="challenge--cover">
          <img src={img} alt={title} />
        </div>
        <div className="challenge--details">
          <h2 className="challenge--title">{title}</h2>
          <p className="challenge--description">{description}</p>
        </div>
      </div>
      <div className="challenge--footer">
        <div className="challenge--data">
          <span>{students} students</span>
          <span>{hours} hours</span>
        </div>
        <ul className="challenge--courses">
          {courses.map((course) => (
            <li className="challenge--course">
              <a href={course.link}>
                <img src={course.img} alt={course.name} />
                <p>{course.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="challenge--buttons">
        <button className="challenge--button left" type="button" onClick={join}>
          + Join
        </button>
        <button className="challenge--button" type="button" onClick={leave}>
          - Leave
        </button>
      </div>
    </div>
  );
};
