import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission - you can replace this with actual API call
    setTimeout(() => {
      setLoading(false);
      enqueueSnackbar('Message sent successfully!', { variant: 'success' });
      setFormData({
        fullName: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className='p-4 max-w-4xl mx-auto'>
      <BackButton />
      <h1 className='text-3xl my-4 text-center'>Contact Us</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
        {/* Personal Information Section */}
        <div className='bg-sky-50 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold text-sky-800 mb-4'>About Me</h2>
          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-medium text-gray-800'>Abduljelil Muze</h3>
              <p className='text-gray-600'>Full-Stack Developer</p>
            </div>
            
            <div>
              <h4 className='font-medium text-gray-800'>Education</h4>
              <p className='text-gray-600'>Bachelor of Science in Computer Science</p>
              <p className='text-gray-600'>Hawassa University, Ethiopia</p>
            </div>
            
            <div>
              <h4 className='font-medium text-gray-800'>Specialization</h4>
              <p className='text-gray-600'>
                Motivated full-stack developer with strong backend development skills. 
                Passionate about creating efficient, scalable web applications using modern technologies.
              </p>
            </div>
            
            <div>
              <h4 className='font-medium text-gray-800'>Skills & Technologies</h4>
              <ul className='text-gray-600 list-disc list-inside space-y-1'>
                <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
                <li>JavaScript (ES6+), TypeScript</li>
                <li>RESTful APIs & Microservices</li>
                <li>Database Design & Optimization</li>
                <li>Version Control (Git)</li>
                <li>Laravel Developer</li>
                 <li>Python,DataScience,ML and Artificial Intelligence Enthusiastic</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className='bg-white p-6 rounded-lg shadow-md border border-gray-200'>
          <h2 className='text-2xl font-semibold text-sky-800 mb-6'>Get In Touch</h2>
          
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='fullName' className='block text-sm font-medium text-gray-700 mb-1'>
                Full Name *
              </label>
              <input
                type='text'
                id='fullName'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500'
                placeholder='Enter your full name'
              />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                Email Address *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500'
                placeholder='Enter your email address'
              />
            </div>

            <div>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
                Message *
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows='5'
                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-vertical'
                placeholder='Enter your message...'
              />
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center'
            >
              {loading ? (
                <>
                  <Spinner size='small' />
                  <span className='ml-2'>Sending...</span>
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Additional Contact Information */}
      <div className='mt-8 bg-gray-50 p-6 rounded-lg'>
        <h3 className='text-xl font-semibold text-gray-800 mb-4'>Other Ways to Connect</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-center'>
          <div className='p-4'>
            <div className='text-sky-600 font-semibold'>Email</div>
            <div className='text-gray-600'>abdu092hu@gmail.com</div>
          </div>
          <div className='p-4'>
            <div className='text-sky-600 font-semibold'>Phone</div>
            <div className='text-gray-600'>+251932632680</div>
            <div className='text-gray-600'>+251710059619</div>
          </div>
          <div className='p-4'>
            <div className='text-sky-600 font-semibold'>Portifolio</div>
            <div className='text-gray-600'>abdu32.app.vercel</div>
          </div>
          <div className='p-4'>
            <div className='text-sky-600 font-semibold'>Location</div>
            <div className='text-gray-600'>Addis Ababa,Ethiopia</div>
          </div>
          <div className='p-4'>
            <div className='text-sky-600 font-semibold'>Availability</div>
            <div className='text-gray-600'>Open for opportunities</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;