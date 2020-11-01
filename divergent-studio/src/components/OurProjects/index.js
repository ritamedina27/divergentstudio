import React, { useEffect, useState } from 'react';
import './styles.css';
import getProjects from '../../api/getProject';
function OurProjects() {
  const [projects, setProjects] = useState();

  useEffect(async () => {
    retrieveProjects();
  }, []);

  const retrieveProjects = async () => {
    const newprojects = await getProjects();
    setProjects(newprojects);
  };

  return (
    <div className="ourProjects">
      {projects &&
        projects.data?.records.map((item) => (
          <div className="project">
            <h1>{item.fields.Name}</h1>
            {item.fields.Image && (
              <img src={item.fields.Image[0].url} height="200px"></img>
            )}
            <p>{item.fields.Descritpion}</p>
          </div>
        ))}
    </div>
  );
}

export default OurProjects;
