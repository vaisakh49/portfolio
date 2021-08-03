import React, { useState } from 'react';
// import Pdf from '../../editable-stuff/Ana Ashrafi - Resume 2020.pdf';
import Profile from '../../editable-stuff/Profile.jpg';

import {
  aboutHeading,
  aboutDescription,
} from '../../editable-stuff/configurations.json';

const AboutMe = () => {
  // const [resume] = useState(Pdf);

  return (
    <div
      id='aboutme'
      className='jumbotron jumbotron-fluid m-0'
      style={{ backgroundColor: '#f7f7f7' }}
    >
      <div className='container container-fluid'>
        <div className='flex-row'>
          <div className='col-5 d-none d-lg-inline align-self-center'>
            <img
              className='border border-secondary rounded-circle  align-self-center '
              src={Profile}
              alt='profilepicture'
              width='375'
              height='375'
            />
          </div>
          <div className='col d-lg-inline align-self-center'>
            <h1 className='display-4 mb-5 text-center '>{aboutHeading}</h1>
            <p className='lead text-center'>{aboutDescription}</p>
            <br />
            {/* {resume && ( */}
            <p className='lead text-center'>
              <a
                className='btn btn-outline-dark btn-lg'
                href='#!'
                // {Pdf}
                target='_blank'
                rel='noreferrer noopener'
                role='button'
              >
                Resume
              </a>
            </p>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
