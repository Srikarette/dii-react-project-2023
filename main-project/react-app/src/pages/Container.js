import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Container({ children, className }) {
  return <main className={className}>{children}</main>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};

export default styled(Container)`
  max-width: 1200px;
  border: 1px solid black;
  margin-right: 50px;

`;
