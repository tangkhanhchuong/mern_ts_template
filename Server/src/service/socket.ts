import socketIo from "socket.io"
import { Server } from "http"

const corsOptions = {
    cors: {
        origin: "*",
        methods: "*",
        allowedHeaders: "*",
    },
}

export const connectToSocket = async (server: Server) => {
    const io = new socketIo.Server(server, corsOptions)
    console.log("Socket Connected")
    io.on("connection", (socket) => {
        console.log("Hello")
        socket.emit("user-connected")

        socket.on("push", () => {
            console.log("Push")
            socket.emit("push-again")
        })
    })
    console.log("Hi")
}