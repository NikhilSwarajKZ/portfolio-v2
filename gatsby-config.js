module.exports = {
  siteMetadata: {
    title: `Nikhil Swaraj`,
    titleTemplate: '%s | Nikhil',
    description: `A Computer science and Engineering student, 
    Deep Learning and Computer Vision 
    engineer and a web developer`,
    descriptionSmall: `Software Developer, Cyber Security Enthusiast`,
    email: 'nikhilswaraj.official@gmail.com',
    siteUrl: 'https://nikhilswaraj.dev',
    image: '/images/icon.png',
    avatar: '/images/arkadip.jpeg',
    author: `@nikhilswarajofficial`,
    twitterUsername: '@NikhilSwarajKZ',
    social: {
      twitter: {
        url: 'https://x.com/NikhilSwarajKZ',
        handle: '@NikhilSwarajKZ',
      },
      github: {
        url: 'https://github.com/NikhilSwarajKZ',
        handle: '@NikhilSwarajKZ',
      },
      linkedin: {
        url: 'https://www.linkedin.com/in/NikhilSwarajKZ',
        handle: '@NikhilSwarajKZ',
      },
    },
    utils: {
      delay: {
        navDelay: 1000,
        loaderDelay: 2000,
      },
    },
    nav: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Projects',
        link: 'https://github.com/NikhilSwarajKZ?tab=repositories',
      },
      {
        name: 'Resume',
        link: 'https://drive.google.com/file/d/1huk4LDa6vh2RY5CMb8zJKe-ilLcTY4qL/view?usp=drive_link',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-R4EKTLHVCE'],
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://nikhilswaraj.dev`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Nikhil Swaraj',
        short_name: 'Nikhil',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'assets',
    //     path: './src/assets/',
    //   },
    //   __key: 'assets',
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
