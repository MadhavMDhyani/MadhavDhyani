import PROFILE_PIC from "../assets/images/profile-pic.png";
import { FaReact, FaNodeJs, FaJs, FaGithub, FaLinkedin, FaDatabase, FaServer } from "react-icons/fa6";
import { personalInfo, STATS } from "../utils/data";
import StateInfoCard from "../components/StateInfoCard";

const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-6 md:px-12 py-12">
      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-between mt-8 lg:mt-16">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fee6cc] dark:bg-[#2a1a0e] text-[#ac573f] dark:text-[#f4a44f] text-sm font-semibold mb-4">
            Welcome to my Portfolio
          </span>
          <h3 className="text-xl lg:text-2xl font-medium text-slate-700 dark:text-slate-300">
            Hi, I am <span className="text-[#ac573f] dark:text-[#f4a44f] font-semibold">{personalInfo.name}</span>
          </h3>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Building Scalable &amp; User Centric Web Apps
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base mt-4 leading-relaxed">
            I'm a passionate JavaScript and Backend Developer with a strong focus on creating scalable, high-performance, and user-centric web applications. I strive to build seamless digital experiences that solve real-world problems.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
            <a href="#projects" className="action-btn flex items-center justify-center btn-scale-anim">
              View My Work
            </a>
            <a href="#contact" className="action-btn-outline flex items-center justify-center btn-scale-anim">
              Contact Me
            </a>
          </div>

          {/* Quick Social Links */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Connect:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-[#0a0a0a] shadow-sm border border-orange-100 dark:border-[#1a1a1a] rounded-full text-slate-700 dark:text-slate-300 hover:text-[#ac573f] dark:hover:text-[#f4a44f] hover:border-[#ac573f] dark:hover:border-[#f4a44f] transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-[#0a0a0a] shadow-sm border border-orange-100 dark:border-[#1a1a1a] rounded-full text-slate-700 dark:text-slate-300 hover:text-[#ac573f] dark:hover:text-[#f4a44f] hover:border-[#ac573f] dark:hover:border-[#f4a44f] transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </div>
        </div>

        {/* Right Content / Profile Graphic */}
        <div className="relative flex justify-center items-center">
          {/* Tech Badges floating */}
          <div className="absolute -top-4 -left-4 p-3 bg-white dark:bg-[#0a0a0a] shadow-lg dark:shadow-black/40 rounded-2xl border border-orange-100 dark:border-[#1a1a1a] flex items-center gap-2 animate-bounce z-10">
            <FaReact className="text-sky-400 text-2xl" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">React</span>
          </div>

          <div className="absolute top-1/4 -right-6 p-3 bg-white dark:bg-[#0a0a0a] shadow-lg dark:shadow-black/40 rounded-2xl border border-orange-100 dark:border-[#1a1a1a] flex items-center gap-2 z-10">
            <FaNodeJs className="text-green-500 text-2xl" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Node.js</span>
          </div>

          <div className="absolute -bottom-4 left-4 p-3 bg-white dark:bg-[#0a0a0a] shadow-lg dark:shadow-black/40 rounded-2xl border border-orange-100 dark:border-[#1a1a1a] flex items-center gap-2 z-10">
            <FaJs className="text-yellow-400 text-2xl" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">JavaScript</span>
          </div>

          <div className="absolute -bottom-4 -right-2 p-3 bg-white dark:bg-[#0a0a0a] shadow-lg dark:shadow-black/40 rounded-2xl border border-orange-100 dark:border-[#1a1a1a] flex items-center gap-2 z-10">
            <FaDatabase className="text-purple-500 text-2xl" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Databases</span>
          </div>

          <div className="absolute -top-4 right-8 p-2.5 bg-white dark:bg-[#0a0a0a] shadow-lg dark:shadow-black/40 rounded-2xl border border-orange-100 dark:border-[#1a1a1a] flex items-center gap-2 z-10">
            <FaServer className="text-orange-500 text-xl" />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">APIs</span>
          </div>

          {/* Profile Card Container */}
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-tr from-amber-100 to-orange-200 dark:from-[#1a0f05] dark:to-[#2a1508] p-2 shadow-2xl dark:shadow-black/50">
            <img
              src={PROFILE_PIC}
              alt={`${personalInfo.name} Profile Pic`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Stats Counter Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16">
        {STATS.map((stat) => (
          <StateInfoCard key={stat.id} count={stat.count} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;