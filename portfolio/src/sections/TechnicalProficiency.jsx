import { skills } from "../utils/data";

const TechnicalProficiency = () => {
  return (
    <section id="skills" className="container mx-auto px-6 md:px-12 py-16">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 bg-gradient-primary bg-clip-text text-transparent inline-block">
        Technical Proficiency
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-6 rounded-2xl bg-white border border-[#fee6cc] shadow-sm hover:shadow-md transition-all text-center group cursor-pointer"
          >
            <p className="font-semibold text-slate-700 group-hover:text-[#ac573f] transition-colors">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalProficiency;