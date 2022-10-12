/**
 * TODO: Switch out when building your application on Web App Base JS.
 * -------------------------------------------------------------------
 *
 * These are the API routes. Called from the client in our demo application.
 * Create new using this as a blueprint or delete starting at ../../httpapi1/
 * according to your application's requirements, then import and set server to
 * use in server.js
 */


/* httpapi1 works with database1. */
import {
  getButtons,
  incrementButton,
  resetAll,
  resetButton
} from "../../../databases/database1/methods"

import express from "express"

const router = express.Router()

router.get("", async (req, res) => {
  try {
    const buttons = await getButtons()

    return res.status(200).json(buttons)
  } catch (err) {

    // TODO: Send only the status code in our demo application.
    // In your application you'll probably send a message as well.
    return res.status(400).end()
  }
})

router.post("/increment", async (req, res) => {
  try {
    const { buttonNumber } = req.body

    const updated = await incrementButton(buttonNumber)

    return res.status(200).json(updated)
  } catch (err) {

    // TODO: Send only the status code in our demo application.
    // In your application you'll probably send a message as well.
    return res.status(400).end()
  }
})

router.post("/reset-all", async (req, res) => {
  try {
    const updated = await resetAll()

    return res.status(200).json(updated)
  } catch (err) {

    // TODO: Send only the status code in our demo application.
    // In your application you'll probably send a message as well.
    return res.status(400).end()
  }
})

router.post("/reset-single", async (req, res) => {
  try {
    const { buttonNumber } = req.body

    const updated = await resetButton(buttonNumber)

    return res.status(200).json(updated)
  } catch (err) {

    // TODO: Send only the status code in our demo application.
    // In your application you'll probably send a message as well.
    return res.status(400).end()
  }
})

module.exports = {
  httpAPI1Buttons: router
}
