import { personalInfo } from "../utils/data";
import { FaEnvelope, FaPhone, FaLocationDot, FaGithub, FaLinkedin } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <section id="contact" className="container mx-auto px-6 md:px-12 py-16">
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 dark:from-[#1a0f05] dark:to-[#0a0a0a] rounded-3xl p-8 md:p-12 text-white shadow-xl dark:shadow-black/40 dark:border dark:border-[#2a1a0e] transition-colors">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-orange-100 dark:text-slate-400 mb-8">
            Have a project in mind or want to talk tech? Reach out to me directly or connect on social media.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl dark:text-[#f4a44f]" />
              <a href={`mailto:${personalInfo.email}`} className="hover:underline font-medium dark:text-slate-200">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-xl dark:text-[#f4a44f]" />
              <span className="font-medium dark:text-slate-200">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationDot className="text-xl dark:text-[#f4a44f]" />
              <span className="font-medium dark:text-slate-200">{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 dark:bg-[#111111] hover:bg-white/30 dark:hover:bg-[#1a1a1a] rounded-full transition-colors dark:border dark:border-[#222222]"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 dark:bg-[#111111] hover:bg-white/30 dark:hover:bg-[#1a1a1a] rounded-full transition-colors dark:border dark:border-[#222222]"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;