module.exports = {
  html        : true,
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      app: ["./app.js"]
    }
  },

  browserSync: {
    server: {
      baseDir: 'public'
    }
  },

  ghPages: {
    branch: "master",
  },

  production: {
    rev: true
  }
}

