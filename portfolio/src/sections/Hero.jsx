import React from "react";
import PROFILE_PIC from "../assets/images/profile pic.png";
import { FaReact, FaNodeJs, FaJs, FaJava } from "react-icons/fa6";
import StateInfoCard from "../components/StateInfoCard";

const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-6 md:px-12 py-12">
      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-between mt-8 lg:mt-16">
        {/* Left Content */}
        <div className="text-center lg:text-left max-w-xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fee6cc] text-[#ac573f] text-sm font-semibold mb-4">
            Welcome to my Portfolio
          </span>
          <h3 className="text-xl lg:text-2xl font-medium text-slate-700">
            Hi, I am <span className="text-[#ac573f] font-semibold">Madhav Dhyani</span>
          </h3>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Building Scalable &amp; User Centric Web Apps
          </h1>

          <p className="text-slate-600 text-sm lg:text-base mt-4 leading-relaxed">
            I'm a passionate JavaScript and Backend Developer with a strong focus on creating scalable, high-performance, and user-centric web applications. I strive to build seamless digital experiences that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
            <a href="#projects" className="action-btn flex items-center justify-center btn-scale-anim">
              View My Work
            </a>
            <a href="#contact" className="action-btn-outline flex items-center justify-center btn-scale-anim">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Content / Profile Graphic */}
        <div className="relative flex justify-center items-center">
          {/* Tech Badges floating */}
          <div className="absolute -top-4 -left-4 p-3 bg-white shadow-lg rounded-2xl border border-orange-100 flex items-center gap-2 animate-bounce">
            <FaReact className="text-sky-400 text-2xl" />
            <span className="text-xs font-semibold text-slate-700">React</span>
          </div>

          <div className="absolute top-1/2 -right-6 p-3 bg-white shadow-lg rounded-2xl border border-orange-100 flex items-center gap-2">
            <FaNodeJs className="text-green-500 text-2xl" />
            <span className="text-xs font-semibold text-slate-700">Node.js</span>
          </div>

          <div className="absolute -bottom-4 left-6 p-3 bg-white shadow-lg rounded-2xl border border-orange-100 flex items-center gap-2">
            <FaJs className="text-yellow-400 text-2xl" />
            <span className="text-xs font-semibold text-slate-700">JavaScript</span>
          </div>

          {/* Profile Card Container */}
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-tr from-amber-100 to-orange-200 p-2 shadow-2xl">
            <img
              src={PROFILE_PIC}
              alt="Madhav Dhyani Profile Pic"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-12 nt-16 md:nt-24 flex-wrap">
        {STATS.map((item) => (
          <StateInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;

export const personalInfo = {
  name: "Madhav Dhyani",
  role: "Backend Developer",
  bio: "Hi, This is Madhav Dhyani, a passionate Backend Developer.",
  email: "dhyani.pankaj811@gmail.com",
  phone: "+91 9602938300",
  location: "Indore, India",
  github: "https://github.com/madhavdhyani",
  linkedin: "https://linkedin.com/in/madhavdhyani",
  resume: "/resume.pdf"
};