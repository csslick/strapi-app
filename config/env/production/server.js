module.exports = ({ env }) => ({
  url: env("https://strapi-app-csslick.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ['GZVgBtAKaJibCjFiqktLXw==','FlTfUoeKZW2hmhF3PlFxtg==','iBdN3UrSvVKfjeKDD6aGBg==','wUWzbQoUkncikAcKLW6aiQ=='])
  },
});