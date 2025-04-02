import React from "react";
// import { Link } from "react-router-dom";

interface MenuProps {
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-50 font-raleway">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl font-bold"
        aria-label="Close menu"
      >
        &times;
      </button>

      {/* Menu Items */}
      <nav className="flex flex-col items-center space-y-8 text-2xl font-semibold">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white text-3xl font-bold"
          aria-label="Close menu"
        >
          &times;
        </button>

        <a
          href="/#"
          onClick={onClose}
          className="hover:text-green-400 transition"
        >
          HOME
        </a>
        <a
          href="/#about"
          onClick={onClose}
          className="hover:text-green-400 transition"
        >
          ABOUT
        </a>
        <a
          href="/#services"
          onClick={onClose}
          className="hover:text-green-400 transition"
        >
          SERVICES
        </a>
        <a
          href="/#projects"
          onClick={onClose}
          className="hover:text-green-400 transition"
        >
          PROJECTS
        </a>
        <a
          href="/#team"
          onClick={onClose}
          className="hover:text-green-400 transition"
        >
          TEAM
        </a>
        <a
          href="/#contact"
          onClick={onClose}
          className="hover:text-green-400 transition"
        >
          CONTACT
        </a>
      </nav>
    </div>
  );
};

export default Menu;
