import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import * as Product from './models/Product'
import * as User from './models/User'
import * as Order from './models/Order'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})
// Product route
app.get('/products', Product.getProducts)
app.get('/products/:id', Product.getProductById)
app.post('/products', Product.createProduct)

// User route
app.get('/users', User.getUsers)
app.get('/users/:id', User.getUserById)
app.post('/users', User.createUser)

// Order route
app.get('/orders/current/:user_id', Order.getCurrentOrdersByUserId)
app.get('/orders/completed/:user_id', Order.getCompletedOrdersByUserId)

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
