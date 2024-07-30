
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CourseList from './components/courseList';
import CourseDetail from './components/courseDetail';
import { courses } from './data/courses'; // Importing mock data

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  // Function to handle search/filtering
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = courses.filter(course =>
      course.title.toLowerCase().includes(query)
    );
    setFilteredCourses(filtered);
  };

  return (
    <Router>
      <div>
        <h1>Course Catalog</h1>

        {/* Search input */}
        <div class="searchbar">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={handleSearch}
        />
        </div>

        {/* Buttons for additional actions */}
        <div>
          <button onClick={() => console.log('Button 1 clicked')}>Button 1</button>
          <button onClick={() => console.log('Button 2 clicked')}>Button 2</button>
        </div>

        {/* Table displaying courses */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map(course => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>
                  <Link to={`/courses/${course.id}`}>{course.title}</Link>
                </td>
                <td>{course.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Routes for course list and details */}
        <Routes>
          <Route path="/" exact component={CourseList} />
          <Route path="/courses/:id" component={CourseDetail} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
