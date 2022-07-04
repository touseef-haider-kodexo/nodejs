module.exports = {
  db: {
    local: process.env.LOCAL_DB,
    staging: process.env.STAGING_DB,
    production: process.env.PROD_DB,
    development: process.env.DEV_DB,
  },
};
