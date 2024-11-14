import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {graphql, useStaticQuery} from 'gatsby';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import usePrefersReducedMotion from './../hooks/usePrefersReducedMotion';


const Side = ({children, isHome, orientation}) => {
  const {site: {siteMetadata: {utils:
    {delay: {loaderDelay}}}}} = useStaticQuery(query_);

  const [isMounted, setIsMounted] = useState(!isHome);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!isHome || prefersReducedMotion) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={clsx('w-40px', 'fixed', 'bottom-0', 'z-10', 'max-md:hidden',
      orientation === 'left' ? 'left-40px' : 'left-auto',
      orientation === 'left' ? 'right-auto' : 'right-40px',
      orientation === 'left' ? 'max-lg:left-20px' : 'max-lg:left-auto',
      orientation === 'left' ? 'max-lg:right-auto' : 'max-lg:right-20px')}>
      {prefersReducedMotion ? (
        <>{children}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              classNames={isHome ? 'fade' : ''}
              timeout={isHome ? loaderDelay : 0}
            >
              {children}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </div>
  );
};

Side.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  orientation: PropTypes.string,
};

export default Side;

const query_ = graphql`
  query delay {
  site {
    siteMetadata {
      utils {
        delay {
          loaderDelay
        }
      }
    }
  }
}`;
