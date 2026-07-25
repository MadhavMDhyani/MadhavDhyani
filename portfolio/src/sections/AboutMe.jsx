import { personalInfo } from "../utils/data";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-6 md:px-12 py-16">
      <div className="bg-white/60 dark:bg-[#0a0a0a]/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#fee6cc] dark:border-[#1a1a1a] shadow-sm dark:shadow-black/20 transition-colors">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent inline-block">
          About Me
        </h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg max-w-3xl">
          {personalInfo.bio} I specialize in constructing clean REST APIs, microservices, and high-performance server logic. With an eye for intuitive interfaces and modern software architecture, I love building applications that users enjoy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div className="p-4 rounded-2xl bg-[#FFFCF8] dark:bg-[#050505] border border-orange-100 dark:border-[#1a1a1a] transition-colors">
            <span className="text-xs text-slate-500 dark:text-slate-500 font-medium">Role</span>
            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">{personalInfo.role}</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFFCF8] dark:bg-[#050505] border border-orange-100 dark:border-[#1a1a1a] transition-colors">
            <span className="text-xs text-slate-500 dark:text-slate-500 font-medium">Location</span>
            <p className="text-base font-semibold text-slate-800 dark:text-slate-200">{personalInfo.location}</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFFCF8] dark:bg-[#050505] border border-orange-100 dark:border-[#1a1a1a] transition-colors">
            <span className="text-xs text-slate-500 dark:text-slate-500 font-medium">Email</span>
            <p className="text-base font-semibold text-slate-800 dark:text-slate-200 truncate">{personalInfo.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;