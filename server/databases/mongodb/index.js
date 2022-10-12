import { MongoClient } from "mongodb"

class Database {
  constructor(dbURL, dbName) {
    if (!dbURL) {
      throw new Error("Missing database url")
    }
    if (!dbName) {
      throw new Error("Missing database name")
    }

    this.dbURL = dbURL
    this.dbName = dbName

    this.client = undefined
    this.database = undefined
    this.collections = {}
  }

  connect() {
    return new Promise(async (resolve, reject) => {
      try {
        this.client = new MongoClient(this.dbURL)

        let connectedFlag = false

        setTimeout(() => {
          if (connectedFlag === false) {
            throw new Error("Timed out whilst connecting to MongoDB.")
          }
        }, 8000)

        await this.client.connect()
        connectedFlag = true

        this.database = this.client.db(this.dbName)

        return resolve()
      } catch (err) {
        return reject(err)
      }
    })
  }

  disconnect() {
    this.client.close()
  }

  setCollections(collections) {
    for (const [key, value] of Object.entries(collections)) {
      this.collections[key] = this.database.collection(value)
    }
  }

  getCollections() {
    return this.collections
  }
}

module.exports = {
  MongoDB: Database
}
