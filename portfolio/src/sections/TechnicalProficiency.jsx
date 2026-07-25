import { useState } from "react";
import { skills } from "../utils/data";


const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(skills);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabValueChange = (value) => {}

  return (
  
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">
            Technical Proficiency
          </h4>
       
            <p className="text-sm text-center mt-4 leading-6">
              A versaitile developer with hands-on expertise in modern technologies,
              tools,frameworks and dedicated to building efficient,scalable and
              user-centric solutions. 
             
            </p>
          </div>


      </div>
    </section>
  );
};

export default TechnicalProficiency;