class Database {
  constructor(name, database) {
    this.name = name
    this.database = database
  }
}

class DatabasesGlobal {
  constructor() {
    this.dbs = {}
  }

  setDB(name, db) {
    const database = new Database(name, db)
    this.dbs[name] = database
    return this.dbs[name]
  }

  getDB(name) {
    return this.dbs[name]
  }
}

const databasesGlobal = new DatabasesGlobal()

export default databasesGlobal
