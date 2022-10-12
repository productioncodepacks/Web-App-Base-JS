// To determine which of the following gets exported.
const NODE_ENV = process.env.NODE_ENV


/**
 * Port.
 */
const PORT_DEVELOPMENT = 8080
const PORT_PRODUCTION = 3000

export const PORT = NODE_ENV === "development" ? PORT_DEVELOPMENT : PORT_PRODUCTION


/**
 * MongoDB 1.
 */
const MONGODB_1_URL_DEVELOPMENT = "mongodb://localhost:27017"
const MONGODB_1_URL_PRODUCTION = "XXX"  // TODO: Replace with the production MongoDB URL.

export const MONGODB_1_URL = NODE_ENV === "development" ? MONGODB_1_URL_DEVELOPMENT : MONGODB_1_URL_PRODUCTION
export const MONGODB_1_NAME = "webappbasejsDB1"


/**
 * MongoDB 2.
 */
const MONGODB_2_URL_DEVELOPMENT = "mongodb://localhost:27017"
const MONGODB_2_URL_PRODUCTION = "XXX"  // TODO: Replace with the production MongoDB URL.

export const MONGODB_2_URL = NODE_ENV === "development" ? MONGODB_2_URL_DEVELOPMENT : MONGODB_2_URL_PRODUCTION
export const MONGODB_2_NAME = "webappbasejsDB2"
