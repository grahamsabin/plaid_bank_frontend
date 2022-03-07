const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      target: process.env.REACT_APP_API_HOST || "http://localhost:5010",
      changeOrigin: true
    })
  );
};
