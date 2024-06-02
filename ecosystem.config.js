module.exports = {
    apps: [
      {
        name: 'gatsby-site',
        script: 'npm',
        args: 'run serve --port=3000',
        interpreter: 'none',
        autorestart: true,
        watch: false,
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  