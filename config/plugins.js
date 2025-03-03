module.exports = ({ env }) => ({
    documentation: {
      enabled: true,
      config: {
        openAPI: {
          info: {
            title: 'API Documentation',
            description: 'Documentation de l’API',
            version: '1.0.0',
          },
        },
      },
    },
  });
  