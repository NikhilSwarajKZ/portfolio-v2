import React from 'react';
import PropTypes from 'prop-types';
import {OutboundLink} from 'gatsby-plugin-google-gtag';

const IconWrapper = ({children, href}) => {
  return (
    <OutboundLink
      href={href}
      target={'_blank'}
      className={'transition duration-500 hover:scale-125'}>
      {children}
    </OutboundLink>
  );
};

IconWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default IconWrapper;
