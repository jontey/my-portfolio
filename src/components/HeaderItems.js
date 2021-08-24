import React from "react";
import PropTypes from "prop-types";

import { Button } from "reactstrap";

const handleShow = (name) => {
  document
    .getElementById(name)
    .scrollIntoView({ block: "start", behavior: "smooth" });
};

const HeaderItems = ({ title, link }) => (
  <Button
    style={{ background: "#12171a", color: "#f5f5f5" }}
    key={title}
    color="link"
    className="button"
    onClick={handleShow.bind(this, link)}
  >
    {title}
  </Button>
);

HeaderItems.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  handleShow: PropTypes.func.isRequired,
};

export default HeaderItems;
