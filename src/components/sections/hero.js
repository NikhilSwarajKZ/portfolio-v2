import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import IconWrapper from '../utils/IconWrapper';
import IconGithub from '../../icons/IconGithub';
import IconTwitter from '../../icons/IconTwitter';
import IconLinkedin from '../../icons/IconLinkedin';
import {OutboundLink} from 'gatsby-plugin-google-gtag';
import IconLaptop from '../../icons/IconLaptop';
import {useParallax} from 'react-scroll-parallax';

const Hero = () => {
  const {
    site: {
      siteMetadata: {
        utils: {delay: {loaderDelay, navDelay}},
        social: {github, linkedin, twitter},
      },
    },
  } =
    useStaticQuery(query_);
  const [isMounted, setIsMounted] = React.useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const {ref} = useParallax({speed: 20});

  React.useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const one = (
    <h2 className={'text-xl sm:text-2xl text-neon-teal font-semibold font-light font-lato'}>
      Greetings, Universe!
    </h2>
  );
  const two = (
    <h1 className={'text-4xl sm:text-7xl font-lato ' +
      'font-semibold text-neon-purple'}>
      Hi, I&apos;m Nikhil.
    </h1>
  );
  const three = (
    <p className={'text-2xl sm:text-5xl text-yellow-300 ' +
      'font-semibold font-plex'}>
      I&apos;m a Software Developer.
    </p>
  );

  const four = (
    <p className={'text-base text-neon-pink mt-5 max-w-xl'}>
      {'I am a dynamic '}
      <span className={'text-neon-teal font-bold'}>
        Software Engineer
      </span>
      {' with a robust background in crafting '}
      <span className={'text-neon-teal font-bold'}>
        cloud-native microservice applications
      </span>
      {' using '}
      <span className={'text-neon-teal font-bold'}>Python</span>
      {' and '}
      <span className={'text-neon-teal font-bold'}>JavaScript</span>
      {'. With over '}
      <span className={'text-neon-teal font-bold'}>1.5 years</span>
      {' of hands-on experience, I specialize in leveraging '}
      <span className={'text-neon-teal font-bold'}>AWS</span>
      {' cloud platforms and adeptly employing '}
      <span className={'text-neon-teal font-bold'}>Docker</span>
      {' and other various microservice architectures to design scalable and' +
      ' efficient solutions.'}
    </p>
  );

  const fours = (
    <p className={'text-base text-neon-pink mt-5 max-w-xl'}>
      {'Currently, I am contributing my expertise to a pioneering company, '} 
      <OutboundLink
        href={'https://www.mercuri.cx/'}
        target={'_blank'}
        className={'text-neon-teal font-bold'}
      >
        Mercuri CX
      </OutboundLink>
      {' where I actively participate in developing innovative products at the intersection of technology and e-commerce.'}
    </p>
  );

  const five = (
    <div className={'flex space-x-6 mt-5'}>
      <IconWrapper href={linkedin.url}>
        <IconLinkedin/>
      </IconWrapper>
      <IconWrapper href={github.url}>
        <IconGithub/>
      </IconWrapper>
      <IconWrapper href={twitter.url}>
        <IconTwitter/>
      </IconWrapper>
    </div>
  );
  const six = (
    <div className="fixed inset-0 bottom-5 flex justify-center items-end">
      <span className="text-neon-teal font-bold">שָׁלוֹם עֲלֵיכֶם</span>
    </div>
  );

  const items = [one, two, three, four, fours, five];

  return (
    <div className={'h-screen'} ref={ref}>
      <div className={'h-screen flex flex-col justify-center ' +
        'container mx-auto pl-5 z-10 sm:px-24'}>
        <div className={'sm:mx-10'}>
          {prefersReducedMotion ? (
            <>
              {items.map((item, index) => (
                <div key={index}>
                  {item}
                </div>
              ))}
            </>
          ) : (
            <>
              <TransitionGroup component={null}>
                {isMounted &&
                  items.map((item, i) => (
                    <CSSTransition
                      key={i}
                      classNames="fadeup"
                      timeout={loaderDelay}
                    >
                      <div
                        style={{transitionDelay: `${i + 1}00ms`}}
                        className='p-1'
                      >
                        {item}
                      </div>
                    </CSSTransition>
                  ))}
                {isMounted && (
                  <CSSTransition classNames={'fade'} timeout={loaderDelay}>
                    <div
                      className={'z-50 bottom-5 right-10 hidden sm:block ' +
                        'absolute transition duration-500 hover:scale-125'}
                    >
                      <IconLaptop/>
                    </div>

                  </CSSTransition>
                )}
              </TransitionGroup>
            </>
          )}
        </div>
      </div>  
      {six}
    </div>
  );
};

export default Hero;

const query_ = graphql`
  query HeroQuery {
  site {
    siteMetadata {
      utils {
        delay {
          loaderDelay
          navDelay
        }
      }
      social {
        github {
          url
        }
        linkedin {
          url
        }
        twitter {
          url
        }
      }
    }
  }
}
`;
