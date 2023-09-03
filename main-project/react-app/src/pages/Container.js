import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function Container({ children, className }) {
  return <main className={className}>{children}</main>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(Container)`
  max-width: 1400px;
  /*   */
  /* background-color: rgba(37, 95, 156, 0.937); */

  margin-right: 12%;
`;
