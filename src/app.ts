import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { routes } from './api/routes'
import { morganMiddleware } from './api/middlewares/logger'
import { requestNotFound404 } from './api/middlewares/404Request'


export const app: express.Application = express()

app.use(cors())
app.use(bodyParser.json())

app.use(morganMiddleware)

routes(app);

app.use(requestNotFound404)