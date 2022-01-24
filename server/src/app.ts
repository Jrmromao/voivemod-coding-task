import express from 'express'
import { router } from './routes'
var cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())
app.use(router)

export { app }