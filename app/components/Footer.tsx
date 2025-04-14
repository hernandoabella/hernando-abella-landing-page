"use client";

import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa"; 

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-10 text-center bg-[#141414]">
      <div>
        {/* Sección de redes sociales */}
        <div className="my-10 flex justify-center space-x-6">
          <a
            href="https://twitter.com/hernandoabella"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/hernandoabella"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/c/hernandoabella"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500"
          >
            <FaYoutube className="w-6 h-6" />
          </a>
          <a
            href="https://www.pinterest.com/hernandoabella"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500"
          >
            <FaPinterest className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/hernandoabella"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/hernandoabella"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/+573043932597"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
        </div>
        {/* Derechos reservados */}
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
