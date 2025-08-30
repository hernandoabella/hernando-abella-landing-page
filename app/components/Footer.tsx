import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 text-center bg-[#0f172a]">
      <div>
        <p className="text-md text-green-400">
          © {new Date().getFullYear()} Hernando Abella. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
