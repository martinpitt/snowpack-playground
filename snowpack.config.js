// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
      src: '/',
  },
  plugins: [
      ["@snowpack/plugin-run-script", {
          "cmd": "eslint --ext .js,.jsx src/",
          "watch": "esw -w --clear --ext .js,.jsx src/",
       }
      ]
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
