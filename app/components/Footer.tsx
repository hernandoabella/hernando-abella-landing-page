import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 text-center bg-[#161616]">
      <div>
        <div>
          <p className="text-md text-gray-500">
            © {new Date().getFullYear()} Hernando Abella. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;