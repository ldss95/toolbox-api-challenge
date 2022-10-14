import express from 'express'
import cors from 'cors'

import v1Routes from './v1/routes.js'

const app = express()

app.set('port', 3000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: (_, callback) => callback(null, true),
    credentials: true
  })
)

app.use('/v1', v1Routes)

app.all('*', (req, res) => res.status(404).sendFile(process.cwd() + '/src/404.html'))

export default app
