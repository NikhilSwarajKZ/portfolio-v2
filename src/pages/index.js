import * as React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/sections/hero';
import Nav from '../components/sections/nav';

// markup
const IndexPage = ({location}) => {
  return (
    <Layout location={location}>
      <Nav
        location={location}
        initialNavState={typeof window !== 'undefined' &&
                        window.innerWidth > 768}
      />
      <Hero/>
    </Layout>
  );
};

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;

export function Head() {
  return (
    <SEO title={'Home | Nikhil'}/>
  );
}
