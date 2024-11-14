import React from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import {graphql, useStaticQuery} from 'gatsby';
import clsx from 'clsx';
import IconLoader from '../icons/IconLoader';

const Loader = ({finishLoading}) => {
  const {site} = useStaticQuery(query);
  const {title, descriptionSmall} = site.siteMetadata;

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
        .add({
          targets: '#logo path',
          delay: 300,
          duration: 1500,
          easing: 'easeInOutQuart',
          strokeDashoffset: [anime.setDashoffset, 0],
        })
        .add({
          targets: '#logo #A',
          duration: 700,
          easing: 'easeInOutQuart',
          opacity: 1,
        })
        .add({
          targets: '#logo #B',
          duration: 700,
          easing: 'easeInOutQuart',
          opacity: 1,
        })
        .add({
          targets: '#title_container',
          duration: 1000,
          easing: 'easeOutCubic',
          scale: 0,
        })
        .add({
          targets: '#title_container',
          duration: 1000,
          easing: 'easeInOutExpo',
          width: 0,
          height: 0,
        })
        .add({
          targets: '#logo',
          duration: 100,
          easing: 'linear',
          opacity: 0,
          scale: 2,
        });
  };

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={
        clsx(isMounted ? 'opacity-100' : 'opacity-0',
            'min-h-screen', 'flex', 'justify-center', 'items-center')}>
        <div className={clsx('inline-flex', 'items-center',
            'space-x-4')}>
          <div className={'flex'}>
            <IconLoader isOnLoader={true}/>
          </div>
          <div id="title_container" className={'flex flex-col'}>
            <div id="subtitle" className={'text-neon-teal'}>
              {descriptionSmall}
            </div>
            <div
              className={'text-neon-pink ' +
              'text-xl sm:text-4xl tracking-tighter'}
            >
              {title}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;

const query = graphql`
  query title {
    site {
      siteMetadata {
        title,
        descriptionSmall
      }
    }
  }
`;
