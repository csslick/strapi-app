module.exports = ({ env }) => ({
  url: env("https://git.heroku.com/strapi-app-csslick.git"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});