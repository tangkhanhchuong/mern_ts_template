import express, { NextFunction, Request, Response } from "express"
import http, { Server } from "http"
import { config as dotenv } from "dotenv"
import cors from "cors"
import morgan from "morgan"

import { errorHandler } from "./middleware/errorHandler"
import { NotFoundError } from "./service/errors"

dotenv()

const PORT = 5000

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/storage", express.static(__dirname + "/storage"))

const server: Server = http.createServer(app)

import { AuthRouter, ProductRouter } from "./route"
app.use("/auth", AuthRouter)
app.use("/product", ProductRouter)

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.json({
		message: "Welcome",
	})
})

app.all("*", async (req: Request, res: Response, next: NextFunction) => {
  	next(new NotFoundError());
});

app.use(errorHandler);

import { connectToMongoDb } from "./config/database"
import { connectToSocket } from "./service/socket"
const bootServer = async () => {
	console.log("Booting server ...")
	await connectToMongoDb()
	await connectToSocket(server)
	server.listen(PORT, () => {
		console.log(`Listen at PORT ${PORT}!!!`)
	})
}

bootServer()
