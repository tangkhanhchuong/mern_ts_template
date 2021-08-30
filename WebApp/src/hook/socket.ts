import { io } from "socket.io-client"

export const connectToSocket = () => {
    const socketUrl = process.env.REACT_APP_SYSTEM_URL || ""
    const socket = io(socketUrl)

    socket.on("disconnect", () => {

    })

    socket.on("user-connected", () => {
        console.log("user connected")
        setTimeout(() => {  
            socket.emit("push")
        }, 3000)
    })
    
    socket.on("push-again", () => {
        console.log("push again haha")
    })
}