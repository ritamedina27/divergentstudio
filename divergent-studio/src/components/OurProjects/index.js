import React, { useEffect, useState } from "react";
import "./styles.css";
import getProjects from "../../api/getProject";
import rita from "../../assets/rita.png";
import dani from "../../assets/dani.png";

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
      <div class Name="main">
        <div>
          <h1>
            Our<p>Portfolio</p>
          </h1>
        </div>
        <div className="second">
          <div className="subtitle">
            <h2>
              We are an Iberian dupla, working from Lisbon. Sometimes from
              Barcelona.
            </h2>
          </div>
          <div className="perfil">
            <div className="rita">
              <img src={rita} alt="Rita" width={170} />
              <h2 className="textoPerfil">
                <strong>Rita Medina </strong>
                <p>UX/UI Design</p>
                <br />
                <p>more about me</p>
                <br />
              </h2>
            </div>
            <div className="dani">
              <img src={dani} alt="Dani" width={170} />
              <h2 className="textoPerfil">
                <strong>Daniel Toledo Monfort</strong>
                <p>Full-stack developer</p>
                <br />
                <p>more about me</p>
                <br />
              </h2>
            </div>
          </div>
        </div>
        {projects &&
          projects.data?.records.map((item) => (
            <div className="container">
              <div className="project">
                {item.fields.Image && (
                  <img src={item.fields.Image[0].url} height="380px"></img>
                )}
                <div className="textProject">
                  <h1>
                    {" "}
                    <strong>{item.fields.Name}</strong>
                  </h1>
                  <h2>
                    <br />
                    {item.fields.Subtitle}
                  </h2>
                  <h3>{item.fields.Descritpion}</h3>
                  <h3>{item.fields.Tags}</h3>
                  <br />
                  <button>Visit the site</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default OurProjects;
