import React, { useState, useEffect, Profiler } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
// import { useMediaQuery } from 'react-responsive';
const divStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};
const Skills = () => {
  // const isMob = useMediaQuery({ query: '(max-device-width: 700px)' });
  return (
    <div
      id='skills'
      className='jumbotron jumbotron-fluid m-0'
      style={{ backgroundColor: '#f7f7f7' }}
    >
      <div className='container container-fluid'>
        {/* <div className="col-5 d-none d-lg-inline align-self-center">
            </div> */}
        <div className='d-inline align-self-center'>
          <h1 className='display-4 pb-5 text-center'>Skills</h1>

          <Tabs
            defaultActiveKey='home'
            justify
            variant='tabs'
            transition={false}
            id='skills-tabs'
            style={{
              backgroundColor: '#f7f7f7',
              fontSize: '1.25rem',
            }}
          >
            <Tab eventKey='home' title='Hard Skills'>
              <div className='row'>
                <div className='col'>
                  <br />

                  <p className='lead'>
                    HTML5
                    <ProgressBar
                      now={87}
                      // style={
                      //   (isMob ? { width: '90px' } : { width: '190px ' },
                      //   { backgroundColor: 'gray' })
                    />
                  </p>

                  <p className='lead'>
                    CSS3
                    <ProgressBar
                      now={70}
                      // style={{ width: '490px', backgroundColor: 'white' }}
                    />
                  </p>
                  <p className='lead'>
                    Javascript
                    <ProgressBar
                      now={60}
                      // style={{ width: '490px', backgroundColor: 'white' }}
                    />
                  </p>
                </div>
                <div className='col'>
                  <br />

                  <p className='lead'>
                    React js
                    <ProgressBar
                      now={85}
                      // style={{ width: '490px', backgroundColor: 'white' }}
                    />
                  </p>

                  <p className='lead'>
                    Node/Express
                    <ProgressBar
                      now={75}
                      // style={{ width: '490px', backgroundColor: 'white' }}
                    />
                  </p>
                  <p className='lead'>
                    Git/Github
                    <ProgressBar
                      now={70}
                      // style={{ width: '490px', backgroundColor: 'white' }}
                    />
                  </p>
                </div>
              </div>
            </Tab>

            <Tab eventKey='soft' title='Soft Skills'>
              <div className='col d-lg-inline align-self-center'>
                <br />
                <div className='row'>
                  <div className='col text-center'>
                    <p className='lead text-center'>Collaboration</p>
                    <img src='https://img.icons8.com/ios/75/000000/collaboration-female-male.png' />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Problem Solving</p>
                    <img src='https://img.icons8.com/ios/75/000000/critical-thinking.png' />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Positivity</p>
                    <img src='https://img.icons8.com/ios/75/000000/happy-cloud.png' />
                  </div>
                </div>
                <br />
                <div className='row'>
                  <div className='col text-center'>
                    <p className='lead text-center'>Goal Setting</p>
                    <img src='https://img.icons8.com/ios/75/000000/goal.png' />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Organization</p>
                    <img src='https://img.icons8.com/ios/75/000000/to-do.png' />
                  </div>
                  <div className='col text-center'>
                    <p className='lead text-center'>Empathy</p>
                    <img src='https://img.icons8.com/ios/75/000000/trust.png' />
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Skills;
