
// src/components/CourseDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';

const CourseDetail = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL

  // Find the course with the matching id
  const course = courses.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      <p><a href="/">Back to Course List</a></p>
    </div>
  );
};

export default CourseDetail;

