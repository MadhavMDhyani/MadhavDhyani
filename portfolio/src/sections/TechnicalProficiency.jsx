import { useState } from "react";
import { SKILL_TABS, skills } from "../utils/data";
import Tabs from "../components/Tabs";

const TechnicalProficiency = () => {
   const [tabData, setTabData] = useState(skills);
   const [activeTab, setActiveTab] = useState("all");

   const handleTabValueChange = (value) => {
    if (value == "all") {
      setTableData(skills);
      setActiveTab("all");
      return;
    }
      const updatedList = skills.filter((skill) => skill.type === value);
      setTableData(updatedList);

      setActiveTab(value);


   }

  return (
    <section id="skills" className="dark:bg-black mt-20 transition-colors">
      <div className="container mx-auto p-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="text-3xl font-bold text-center bg-gradient-primary bg-clip-text text-transparent inline-block w-full">
            Technical Proficiency
          </h4>

          <p className="text-sm text-center mt-4 leading-6 text-slate-600 dark:text-slate-400">
            A versatile developer with hands-on expertise in modern technologies,
            tools, frameworks and dedicated to building efficient, scalable and
            user-centric solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 rounded-2xl bg-white dark:bg-[#0a0a0a] border border-[#fee6cc] dark:border-[#1a1a1a] shadow-sm hover:shadow-md dark:shadow-black/30 transition-all text-center group cursor-pointer"
            >
              <p className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#ac573f] dark:group-hover:text-[#f4a44f] transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        <Tabs
           tabList={SKILL_TABS}
           activelab={activeTab}
           onChange={handleTabValueChange}
           /> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-4 gap-4 min-h-[43px]">
           {tabData.map((skill, index) => (
            <div 
            key={skill.id}
            >
              <Skillcard
              icon={<skill.icon className="w-6 h-6 text-primary" />}
              skillName={skill.skill}
              description={skill.progress}
              />
              </div>
                ))}
              </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;