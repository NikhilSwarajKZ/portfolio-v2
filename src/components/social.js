import React from 'react';
import PropTypes from 'prop-types';
// import { socialMedia } from '@config';
import Side from './../components/side';
// import { Icon } from '@components/icons';

// const StyledSocialList = styled.ul`
//   li {
//     &:last-of-type {
//       margin-bottom: 20px;
//     }
//     a {
//       padding: 10px;
//       &:hover,
//       &:focus {
//         transform: translateY(-3px);
//       }
//       svg {
//         width: 20px;
//         height: 20px;
//       }
//     }
//   }
// `;

const socialMedia = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/',
  },
];

const Social = ({isHome}) => (
  <Side isHome={isHome} orientation="left">
    <ul className={'flex flex-col items-center m-0 p-0 list-none' +
      'after:block after:w-1px after:height-90px after:mx-auto after:my-0'}>
      {socialMedia &&
        socialMedia.map(({url, name}, i) => (
          <li key={i} className={'last-of-type:mb-20px'}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer"
              className={'p-10px'}>
              {name}
            </a>
          </li>
        ))}
    </ul>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
