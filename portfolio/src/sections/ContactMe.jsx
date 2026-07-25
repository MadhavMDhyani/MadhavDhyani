import { personalInfo } from "../utils/data";
import { FaEnvelope, FaPhone, FaLocationDot, FaGithub, FaLinkedin } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <section id="contact" className="container mx-auto px-6 md:px-12 py-16">
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-orange-100 mb-8">
            Have a project in mind or want to talk tech? Reach out to me directly or connect on social media.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-xl" />
              <a href={`mailto:${personalInfo.email}`} className="hover:underline font-medium">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-xl" />
              <span className="font-medium">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationDot className="text-xl" />
              <span className="font-medium">{personalInfo.location}</span>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
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