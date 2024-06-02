import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from '@reach/router';
import {useStaticQuery, graphql} from 'gatsby';

const SEO = ({title, description, image, article}) => {
  const {pathname} = useLocation();
  const {site} = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    descriptionSmall,
    siteUrl,
    defaultImage,
    email,
    avatar,
    social: {
      twitter: {handle: twitterHandle, url: twitterUrl},
      github: {url: githubUrl},
      linkedin: {url: linkedinUrl},
    },
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  const structureData = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    'email': email,
    'url': siteUrl,
    'image': avatar,
    'jobTitle': descriptionSmall,
    'name': defaultTitle,
    'gender': 'male',
    'nationality': 'Indian',
    'worksFor': [
      {
        '@type': 'Organization',
        'name': 'Digité Inc.',
        'sameAs': [
          'https://www.digite.com/',
          'https://twitter.com/DigiteInc',
          'https://www.linkedin.com/company/digite/',
        ],
      },
    ],
    'sameAs': [
      twitterUrl,
      githubUrl,
      linkedinUrl,
    ],
  };

  return (
    <>
      {/* Default Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* OG Tags */}
      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}

      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />

      {twitterHandle && (
        <meta name="twitter:creator" content={twitterHandle} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <meta name="google-adsense-account" content="ca-pub-4077277774959103"/>

      {/* LD Json */}
      <script type="application/ld+json">
        {JSON.stringify(structureData)}
      </script>
    </>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        descriptionSmall
        siteUrl
        email
        avatar
        defaultImage: image,
        social {
          github {
            url
          },
          twitter {
            url,
            handle
          },
          linkedin {
            url
          },
        }
      }
    }
  }
`;
