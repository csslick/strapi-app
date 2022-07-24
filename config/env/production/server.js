module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['GZVgBtAKaJibCjFiqktLXw==','FlTfUoeKZW2hmhF3PlFxtg==','iBdN3UrSvVKfjeKDD6aGBg==','wUWzbQoUkncikAcKLW6aiQ=='])
  },
});