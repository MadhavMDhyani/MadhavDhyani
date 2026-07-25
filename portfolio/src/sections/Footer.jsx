import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-orange-100 py-8 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Madhav Dhyani. All rights reserved.</p>
    </footer>
  );
};

export default Footer;