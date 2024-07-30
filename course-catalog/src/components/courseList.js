
// src/components/CourseList.js

import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseList = () => {
  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <strong>{course.title}</strong>
            </Link>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
