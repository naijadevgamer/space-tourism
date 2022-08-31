import React from "react";
import { useParams } from "react-router-dom";

import DATA from "../../data";
import Subheader from "../../component/subheader/subheader.component";
import Tech from "../../component/tech/tech.component";

import "./technology.page.scss";

const TechnologyPage = () => {
  const data = DATA.technology;
  let { id } = useParams();

  return (
    <div className="tech-page">
      <Subheader>
        <span className="subheader__number">03</span>
        Space launch 101
      </Subheader>
      {data
        .filter((tech) => (id ? tech.id == id : tech.id == 0))
        .map((tech) => (
          <Tech key={tech.id} data={tech} />
        ))}
    </div>
  );
};

export default TechnologyPage;
