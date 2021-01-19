import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import * as Product from './models/Product'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})
// Product route
app.get('/product', Product.getProducts)
app.get('/product:id', Product.getProductById)
app.post('/product', Product.createProduct)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
