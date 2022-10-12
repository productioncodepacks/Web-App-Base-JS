/**
 * TODO: Switch out when building your application on Web App Base JS.
 * -------------------------------------------------------------------
 *
 * These are the methods which interact with the database and in our demo
 * application get called mainly from the API.
 */


/* Import global database object. */
import databasesGlobal from "../../mongodb/global"

// Get database1 from the global database object.
const database1 = databasesGlobal.getDB("database1")

// Get buttons collection.
const collection = database1.database.collections.buttonsCollection

/* Import button schema object. */
import buttonSchema from "../schemas/button"

export const populateDatabase1 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const button1 = await collection.find({ buttonNumber: 1 }).toArray()
      const button2 = await collection.find({ buttonNumber: 2 }).toArray()
      const button3 = await collection.find({ buttonNumber: 3 }).toArray()

      if (!button1.length || !button2.length || !button3.length) {
        // Flush the database incase we have any button schemas in there.
        await collection.deleteMany({})

        await writeButton(1)
        await writeButton(2)
        await writeButton(3)

        return resolve(true)
      }

      return resolve(false)
    } catch (err) {
      return reject(err)
    }
  })
}

const writeButton = buttonNumber => {
  return new Promise(async (resolve, reject) => {
    try {
      const schema = JSON.parse(JSON.stringify(buttonSchema))
      schema.buttonNumber = buttonNumber

      await collection.insertOne(schema)

      return resolve()
    } catch (err) {
      return reject(err)
    }
  })
}

export const getButtons = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const buttons = await collection.find({}).toArray()

      buttons.forEach(button => {
        delete button["_id"]
      })

      return resolve(buttons)
    } catch (err) {
      return reject(err)
    }
  })
}

export const incrementButton = buttonNumber => {
  return new Promise(async (resolve, reject) => {
    try {
      await collection.updateOne({ buttonNumber }, { $inc: { "numClicks" : 1 } })
      const newDocument = await collection.findOne({ buttonNumber })

      return resolve({
        buttonNumber: newDocument.buttonNumber,
        numClicks: newDocument.numClicks
      })
    } catch (err) {
      return reject(err)
    }
  })
}

export const resetAll = () => {
  return new Promise(async (resolve, reject) => {
    await collection.updateMany({}, { $set: { "numClicks" : 0 } })

    const buttons = await collection.find({}).toArray()

    buttons.forEach(button => {
      delete button["_id"]
    })

    return resolve(buttons)
  })
}

export const resetButton = buttonNumber => {
  return new Promise(async (resolve, reject) => {
    try {
      await collection.updateOne({ buttonNumber }, { $set: { "numClicks" : 0 } })
      const newDocument = await collection.findOne({ buttonNumber })

      return resolve({
        buttonNumber: newDocument.buttonNumber,
        numClicks: newDocument.numClicks
      })
    } catch (err) {
      return reject(err)
    }
  })
}
