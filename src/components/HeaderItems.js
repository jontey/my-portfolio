import React from "react";
import PropTypes from "prop-types";

const getHeaderOffset = () => {
  const header = document.querySelector("header[role='navigation']");
  return header ? header.getBoundingClientRect().height : 0;
};

const handleShow = (name) => {
  const target = document.getElementById(name);
  if (!target) return;

  const offset = getHeaderOffset() + 8;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth"
  });
};

const HeaderItems = ({ title, link }) => (
  <button
    key={title}
    className="bg-transparent text-white border-none py-2 px-2 cursor-pointer transition-colors duration-300 shadow-none hover:text-brand hover:bg-transparent focus:outline focus:outline-2 focus:outline-brand focus:outline-offset-2 focus:bg-transparent active:bg-transparent text-xs md:py-2.5 md:px-4 md:text-[1rem]"
    onClick={handleShow.bind(this, link)}
    aria-label={`Navigate to ${title} section`}
    type="button"
  >
    {title}
  </button>
);

HeaderItems.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default HeaderItems;
