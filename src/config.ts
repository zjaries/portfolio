const isProd = process.env.NODE_ENV === "production";

const config = {
  basePath: isProd ? "/portfolio" : "",
};

export default config;
