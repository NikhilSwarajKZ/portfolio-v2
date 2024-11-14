import React from 'react';
import PropTypes from 'prop-types';
import {OutboundLink} from 'gatsby-plugin-google-gtag';


const NavLink = ({name, url}) => {
  if (url.startsWith('http')) {
    return (
      <OutboundLink
        className="px-4 py-2 mt-2 md:mt-0 text-md font-semibold md:ml-4
        text-neon-violet no-underline underline-offset-1 hover:pointer"
        href={url}
        target='_blank'
      >
        {name}
      </OutboundLink>
    );
  } else {
    return (
      <a
        className="px-4 py-2 mt-2 md:mt-0 text-md font-semibold md:ml-4
        text-neon-violet no-underline underline-offset-1 hover:pointer"
        href={url}
      >
        {name}
      </a>
    );
  }
};

NavLink.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default NavLink;
