import React, { useState } from "react";

import DATA from "../../data";
import Subheader from "../../component/subheader/subheader.component";
import Tech from "../../component/tech/tech.component";

import "./technology.page.scss";

const TechnologyPage = () => {
  const techData = DATA.technology;
  const [filter, setFilter] = useState(0);
  return (
    <div className="tech-page">
      <Subheader>
        <span className="subheader__number">03</span>
        Space launch 101
      </Subheader>
      {techData
        .filter((tech) => tech.id === filter)
        .map((tech) => (
          <Tech
            key={tech.id}
            techData={tech}
            filter={filter}
            setFilter={setFilter}
          />
        ))}
    </div>
  );
};

export default TechnologyPage;
