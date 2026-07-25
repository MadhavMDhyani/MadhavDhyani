import React from "react";
import { personalInfo } from "./Hero";

const AboutMe = () => {
  return (
    <section id="about" className="container mx-auto px-6 md:px-12 py-16">
      <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-[#fee6cc] shadow-sm">
        <h2 className="text-3xl font-bold text-slate-800 mb-4 bg-gradient-primary bg-clip-text text-transparent inline-block">
          About Me
        </h2>
        <p className="text-slate-600 leading-relaxed text-base md:text-lg max-w-3xl">
          {personalInfo.bio} I specialize in constructing clean REST APIs, microservices, and high-performance server logic. With an eye for intuitive interfaces and modern software architecture, I love building applications that users enjoy.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          <div className="p-4 rounded-2xl bg-[#FFFCF8] border border-orange-100">
            <span className="text-xs text-slate-500 font-medium">Role</span>
            <p className="text-base font-semibold text-slate-800">{personalInfo.role}</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFFCF8] border border-orange-100">
            <span className="text-xs text-slate-500 font-medium">Location</span>
            <p className="text-base font-semibold text-slate-800">{personalInfo.location}</p>
          </div>
          <div className="p-4 rounded-2xl bg-[#FFFCF8] border border-orange-100">
            <span className="text-xs text-slate-[#555] font-medium">Email</span>
            <p className="text-base font-semibold text-slate-800 truncate">{personalInfo.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;