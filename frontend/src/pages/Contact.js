import { Link } from 'react-router-dom';
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <div className='contact-container'>
      <div className="cont-buttons-container">
        <Link to="/"><button className="cont-home-button">Home</button></Link>
        <Link to="/Portfolio"><button className="cont-portfolio-button">Portfolio</button></Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div>
          <label>Subject:</label>
          <textarea name="subject" value={formData.subject} onChange={handleChange} required/>
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact