const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "This_is_really_a_secret_Balalala",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_PORT ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject"
};

export default config;
