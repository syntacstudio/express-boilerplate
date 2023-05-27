import env from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'

import mainController from './controllers/main-controller.js'

env.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb', extended: true }))

app.get('/', mainController.index)

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`APP started ${process.env.HOST}:${process.env.PORT}`)
})
