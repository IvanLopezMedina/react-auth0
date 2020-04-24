import React, {useState, useEffect} from 'react';

const Courses = ({auth}) => {
  const [courses, setCourses] = useState([]);
  const accessToken = `Bearer ${auth.getAccessToken()}`;
  useEffect(() => {
    fetch('/course', {
      headers: {Authorization: accessToken},
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Network  response was not ok');
      })
      .then((response) => setCourses(response.courses))
      .catch((error) => setCourses(error.message));

    fetch('/admin', {
      headers: {Authorization: accessToken},
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('Network  response was not ok');
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error.messaage));
  }, []);

  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>{course.title}</li>
      ))}
    </ul>
  );
};

export default Courses;
