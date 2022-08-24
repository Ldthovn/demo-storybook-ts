import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Alert = ({ message, type, width }) => {
  return (
    <div className={`Alert Alert-${type}`} style={{ width: width }}>
      <span className="Alert-text">{message}</span>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "warning", "info", "danger"]),
};

Alert.defaultProps = {
  message: "Success Text",
  type: "success",
};
