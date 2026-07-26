import { personalInfo } from "../utils/data";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-6 md:px-12 py-16">
      <div className="relative bg-white/60 dark:bg-[#0a0a0a]/80 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#fee6cc] dark:border-[#1a1a1a] shadow-sm dark:shadow-black/20 transition-colors overflow-hidden">
        
        {/* signature accent bar */}
        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-primary" />

        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary dark:text-orange-400/80">
          Introduction
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-5 bg-gradient-primary bg-clip-text text-transparent inline-block">
          About Me
        </h2>

        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg md:text-xl max-w-3xl">
          {personalInfo.bio} I specialize in building clean REST APIs, resilient microservices, and high-performance server logic — with an eye for intuitive interfaces and thoughtful software architecture that people genuinely enjoy using. My core strength lies in backend development with Java, where I work extensively with Spring Boot to design scalable, secure, and well-tested services. I'm comfortable modeling relational schemas and writing efficient queries in databases like MySQL and PostgreSQL, and I care deeply about getting the data layer right — proper indexing, normalization, and transaction handling — so applications stay fast and reliable as they grow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          <div className="group p-5 rounded-2xl bg-[#FFFCF8] dark:bg-[#050505] border border-orange-100 dark:border-[#1a1a1a] hover:border-orange-200 dark:hover:border-[#2a2a2a] transition-all duration-200">
            <span className="text-xs tracking-wide uppercase text-slate-500 dark:text-slate-500 font-semibold">
              Role
            </span>
            <p className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 mt-1.5">
              {personalInfo.role}
            </p>
          </div>

          <div className="group p-5 rounded-2xl bg-[#FFFCF8] dark:bg-[#050505] border border-orange-100 dark:border-[#1a1a1a] hover:border-orange-200 dark:hover:border-[#2a2a2a] transition-all duration-200">
            <span className="text-xs tracking-wide uppercase text-slate-500 dark:text-slate-500 font-semibold">
              Location
            </span>
            <p className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 mt-1.5">
              {personalInfo.location}
            </p>
          </div>

          <div className="group p-5 rounded-2xl bg-[#FFFCF8] dark:bg-[#050505] border border-orange-100 dark:border-[#1a1a1a] hover:border-orange-200 dark:hover:border-[#2a2a2a] transition-all duration-200">
            <span className="text-xs tracking-wide uppercase text-slate-500 dark:text-slate-500 font-semibold">
              Email
            </span>
            <p className="text-base md:text-lg font-semibold text-slate-800 dark:text-slate-200 mt-1.5 truncate">
              {personalInfo.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;