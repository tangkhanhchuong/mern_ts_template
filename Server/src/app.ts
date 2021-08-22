import express, { NextFunction, Request, Response } from 'express'
import { config as dotenv } from 'dotenv'
import cors from "cors"
import morgan from 'morgan'

import { errorHandler } from './middlewares/errorHandler'
import { NotFoundError } from './services/errors'

dotenv()

const PORT = 5000

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

import { AuthRouter, ProductRouter } from './routes'
app.use('/auth', AuthRouter)
app.use('/product', ProductRouter)

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.json({
		message: "Welcome",
	})
})

app.all('*', async (req: Request, res: Response, next: NextFunction) => {
  	next(new NotFoundError());
});

app.use(errorHandler);

import { connectToMongoDb } from './configs/database'
const bootServer = async () => {
	console.log("Booting server ...")
	await connectToMongoDb()
	app.listen(PORT, () => {
		console.log(`Listen at PORT ${PORT}!!!`)
	})
}

bootServer()
