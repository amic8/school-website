import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate=useNavigate();
  return (
    <div className="about-container">
      <h2>About SJ School</h2>
      <p>
        SJ School is a premier institution dedicated to fostering academic excellence and holistic development.
         Established with a vision to nurture young minds, we offer a rich and supportive environment where students grow intellectually, emotionally, and socially.
      </p>
      <p>
        Our curriculum is designed to challenge and inspire. With a team of experienced educators, modern facilities, and a student-first approach, we aim to build a strong foundation in academics, character, and values.
      </p>
      <p>
        At SJ School, we believe in learning beyond the classroom. Through co-curricular activities, sports, and community engagement programs, students develop leadership, creativity, and compassion—preparing them to be global citizens and lifelong learners.
      </p>
      <p><strong><strong>Address:</strong>Toronto, Canada ,122654<br/><strong>Phone:</strong> 0443 656742<br/><strong>Mail id:</strong>
       sjschool.tr@gmail.com</strong></p>
       <div >
        <button onClick={() => navigate('/home')} style={{ marginRight: '10px' }}>Back</button>
        <button onClick={() => navigate('/login')}>Next</button>
      </div>
    </div>
  );
}

export default About;
