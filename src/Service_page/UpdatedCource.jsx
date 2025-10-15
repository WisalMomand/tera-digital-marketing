import React from 'react';
import './UpdatedCourses.css';

const UpdatedCource = () => {
  const courses = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      author: 'JOHN HELTON',
      date: 'JAN 6, 2025',
      title: 'Web Development 101: A Beginner\'s Roadmap',
      description: 'Your step-by-step guide to becoming a web developer.',
      buttonText: 'Read More',
      buttonStyle: 'outline'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      author: 'JOHN HELTON',
      date: 'JAN 6, 2025',
      title: 'HTML, CSS, and JavaScript: The Ultimate Trio Explained',
      description: 'Master the building blocks of the web.',
      buttonText: 'Read More',
      buttonStyle: 'filled'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1508317469940-e3de49ba902e?w=600&h=400&fit=crop',
      author: 'JOHN HELTON',
      date: 'JAN 6, 2025',
      title: 'Frontend vs. Backend vs. Full Stack: Which Path is Right for You?',
      description: 'Choosing your web development journey.',
      buttonText: 'Read More',
      buttonStyle: 'outline'
    }
  ];

  return (
    <div className="updated-courses">
      <div className="courses-header">
        <div className="header-left">
          <h1>Stay Updated with Our Tips & Service News!</h1>
        </div>
        <div className="header-right">
          <h3>Our Blog</h3>
          <p>Stay informed with our latest cleaning tips, service updates, expert advice on maintaining an immaculate home</p>
        </div>
      </div>

      <div className="courses-container">
        <button className="nav-arrow nav-arrow-left" aria-label="Previous">
          ‹
        </button>

        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="card-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="author">{course.author}</span>
                  <span className="date">{course.date}</span>
                </div>
                <h2 className="card-title">{course.title}</h2>
                <p className="card-description">{course.description}</p>
                <button className={`read-more-btn ${course.buttonStyle}`}>
                  {course.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-arrow nav-arrow-right" aria-label="Next">
          ›
        </button>
      </div>
    </div>
  );
};

export default UpdatedCource;