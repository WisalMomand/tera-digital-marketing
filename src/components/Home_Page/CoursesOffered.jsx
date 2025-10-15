import React from 'react';
import './CoursesOffered.css';

const courses = [
  { title: "Digital Marketing", duration: "30 Minutes", img: "/src/assets/DG.jpg" },
  { title: "Web Development", duration: "45 Minutes", img: "/src/assets/web.jpg" },
  { title: "Graphic Design", duration: "60 Minutes", img: "/src/assets/graphic.jpg" },
  { title: "SEO Optimization", duration: "60 Minutes", img: "/src/assets/seo.jpg" },
];

const CoursesOffered = () => {
  const startCourse = (courseTitle) => {
    alert(`Starting ${courseTitle} course!`);
  };

  return (
    <section className="courses-offered">
      <h2>We also offer some premium courses</h2>
      <p>
       We take pride in delivering exceptional results, and our clients’ success stories speak for themselves. See how businesses
have grown with our digital marketing, SEO, and advertising solutions.
      </p>

      <div className="course-cards">
        {courses.map((course, i) => (
          <div key={i} className="course-card">
            <img src={course.img} alt={course.title} />
            <div className="course-content">
              <h4>{course.title}</h4>

              {/* ✅ Duration + Button in one row */}
              <div className="course-footer">
                <span className="duration">{course.duration}</span>
                <button
                  className="start-course-btn"
                  onClick={() => startCourse(course.title)}
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesOffered;
