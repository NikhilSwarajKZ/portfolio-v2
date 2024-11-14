/**
 * https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
 */

import {useState, useEffect} from 'react';
const QUERY = '(prefers-reduced-motion: no-preference)';
const isRenderingOnServer = typeof window === 'undefined';

const getInitialState = () =>
  // For our initial server render, we won't know if the user
  // prefers reduced motion, but it doesn't matter. This value
  // will be overwritten on the client, before any animations
  // occur.
  isRenderingOnServer ? true : !window.matchMedia(QUERY).matches;

/**
 * The prefers-reduced-motion CSS media query allows us to
 * disable animations for these folks. For our animations
 * that are entirely in CSS (eg. CSS transitions, CSS keyframe animations)
 * @return {boolean|boolean}
 */
function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    useState(getInitialState);
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);
    const listener = (event) => {
      setPrefersReducedMotion(!event.matches);
    };
    mediaQueryList.addEventListener('change', listener);
    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return prefersReducedMotion;
}

export default usePrefersReducedMotion;
