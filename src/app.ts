import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { routes } from './api/routes'


export const app: express.Application = express()

app.use(cors())
app.use(bodyParser.json())

routes(app);