import React from "react";
import PropTypes from "prop-types";

const handleShow = (name) => {
  document
    .getElementById(name)
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

const HeaderItems = ({ title, link }) => (
  <button
    key={title}
    className="nav-button"
    onClick={handleShow.bind(this, link)}
    aria-label={`Navigate to ${title} section`}
    type="button"
  >
    {title}
  </button>
);

HeaderItems.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default HeaderItems;
