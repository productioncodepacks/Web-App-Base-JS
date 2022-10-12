/* Import configuration constants. */
import {
  PORT,            // Port number to run the app on, e.g. 3000 or 8080.

  MONGODB_1_URL,   // Database 1 URL.
  MONGODB_1_NAME,  // Database 1 name.

  MONGODB_2_URL,   // Database 2 URL.
  MONGODB_2_NAME,  // Database 2 name.
} from "./config"


/**
 * Import MongoDB wrapper class.
 * We use this to connect to MongoDB, set collections in the DB and disconnect
 * from the DB.
 */
const { MongoDB } = require("./databases/mongodb")


/**
 * Import the global MongoDB database object.
 * We use this to reference any of our DBS easily anywhere on the server.
 */
import databasesGlobal from "./databases/mongodb/global"

/* Connect to database1 and set it in the global database object. */
const connectToDatabase1 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("\x1b[43m\x1b[30m%s\x1b[0m", ">>> Connect to database 1")

      // Create an instance of the MongoDB wrapper class for database1.
      // Also creates the database if it doesn't exist.
      const database1 = new MongoDB(MONGODB_1_URL, MONGODB_1_NAME)

      // Connect to MongoDB.
      await database1.connect()

      // Import collections for database1.
      const { collections } = require("./databases/database1/collections")

      // Set collections for database1.
      await database1.setCollections(collections)

      console.log("\x1b[42m\x1b[30m%s\x1b[0m", ">>> Connect to database 1: SUCCESS")

      // Set database1 in the global database object.
      databasesGlobal.setDB("database1", database1)

      return resolve()
    } catch (err) {
      console.log("\x1b[41m\x1b[30m%s\x1b[0m", ">>> Connect to database 1: FAILURE")
      return reject(err)
    }
  })
}

/* Connect to database2 and set it in the global database object. */
const connectToDatabase2 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("\x1b[43m\x1b[30m%s\x1b[0m", ">>> Connect to database 2")

      // Create an instance of the MongoDB wrapper class for database1.
      // Also creates the database if it doesn't exist.
      const database2 = new MongoDB(MONGODB_2_URL, MONGODB_2_NAME)

      // Connect to MongoDB.
      await database2.connect()

      // Import collections for database2.
      const { collections } = require("./databases/database2/collections")

      // Set collections for database2.
      await database2.setCollections(collections)

      console.log("\x1b[42m\x1b[30m%s\x1b[0m", ">>> Connect to database 2: SUCCESS")

      // Set database2 in the global database object.
      databasesGlobal.setDB("database2", database2)

      return resolve()
    } catch (err) {
      console.log("\x1b[41m\x1b[30m%s\x1b[0m", ">>> Connect to database 2: FAILURE")
      return reject(err)
    }
  })
}


/**
 * Read the environment our app is running in.
 * This is set in our .env.xxx files.
 */
const NODE_ENV = process.env.NODE_ENV


/**
 * Import Express and Next.js.
 * Express is the web application framework we're using.
 * Next.js is the React framework we're using.
 */
import express from "express"
import next from "next"


// Are we running the app in development?
const dev = NODE_ENV !== "production"


const initializeAndRunApp = () => {
  return new Promise(async (resolve, reject) => {
    console.log("\x1b[43m\x1b[30m%s\x1b[0m", ">>> Initialize and run app")

    // Initialize the Next.js app.
    const app = next({ dev })
    const handle = app.getRequestHandler()

    app
      .prepare()
      .then(async () => {

        // Initialize the express server.
        const server = express()

        // This is incase we want to bind Socket.IO to the server in the future.
        const http = require("http").Server(server)

        /**
         * HTTP API.
         */

        // Parse the data that will be sent to our HTTP endpoints as JSON.
        server.use(express.json())

        // Import HTTP API routes.
        const { httpAPI1Buttons } = require("./apis/httpapi1/buttons")
        const { httpAPI2Buttons } = require("./apis/httpapi2/buttons")

        /* Set server to use HTTP API routes. */

        // httpapi1.
        server.use("/httpapi1/buttons", httpAPI1Buttons)

        // httpapi2.
        server.use("/httpapi2/buttons", httpAPI2Buttons)

        // Have Next.js handle all URL endpoints such as /sign-up, /log-in etc.
        server.get("*", (req, res) => {
          return handle(req, res)
        })

        // Run the app to listen on the chosen port.
        server.listen(PORT, () => {
          console.log("\x1b[42m\x1b[30m%s\x1b[0m", ">>> Initialize and run app: SUCCESS")
          console.log("\x1b[42m\x1b[30m%s", ">>> Running in", NODE_ENV, "on port", PORT, "\x1b[0m")

          return resolve()
        })
      })

      // Listen for uncaught exceptions and handle them.
      .catch(ex => {
        console.log("\x1b[41m\x1b[30m%s\x1b[0m", ">>> Initialize and run app: FAILURE")

        return reject(ex.stack)
      })

  })
}


const start = async () => {
  try {
    await connectToDatabase1()

    // Write the initial data to database1 if it hasn't already been written.
    const { populateDatabase1 } = require("./databases/database1/methods")
    const didPopulateDB1 = await populateDatabase1()
    if (didPopulateDB1) {
      console.log("\x1b[47m\x1b[30m%s\x1b[0m", ">>> Populated database1 with initial data")
    }

    await connectToDatabase2()

    // Write the initial data to database2 if it hasn't already been written.
    const { populateDatabase2 } = require("./databases/database2/methods")
    const didPopulateDB2 = await populateDatabase2()
    if (didPopulateDB2) {
      console.log("\x1b[47m\x1b[30m%s\x1b[0m", ">>> Populated database2 with initial data")
    }

    await initializeAndRunApp()
  } catch (err) {

    // Log the error to the console.
    console.log("\x1b[47m\x1b[30m%s\x1b[0m", err)

    // Terminate app.
    process.exit()
  }
}


// ...
start()
