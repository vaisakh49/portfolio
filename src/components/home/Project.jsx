import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import {
  projectHeading,
  gitHubLink,
  gitHubUsername,
  gitHubQuerry,
  projectsLength,
} from '../../editable-stuff/configurations.json';

const Project = () => {
  const [projectsArray, setProjectsArray] = useState([]);

  const handleRequest = useCallback(() => {
    axios
      .get(gitHubLink + gitHubUsername + gitHubQuerry)
      .then((response) => {
        // handle success
        // console.log(response.data.slice(0, 4));
        return setProjectsArray(response.data.slice(0, projectsLength));
      })
      .catch((error) => {
        // handle error
        return console.error(error.message);
      })
      .finally(() => {
        // always executed
      });
  }, []);
  // axios.get

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  return (
    <div
      id='projects'
      className='jumbotron jumbotron-fluid m-0'
      style={{ backgroundColor: '#f7f7f7' }}
    >
      {projectsArray.length && (
        <div className='container container-fluid'>
          <h1 className='display-4 pb-5 text-center'>{projectHeading}</h1>
          <div className='row'>
            {projectsArray.map((project) => (
              <ProjectCard key={project.id} id={project.id} value={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
