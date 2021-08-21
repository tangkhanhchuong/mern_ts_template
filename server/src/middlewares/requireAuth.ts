import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

import { NotAuthorizedError } from '../services/errors'

interface UserPayload extends JwtPayload{
    id: string
    email: string
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload
        }
    }
}

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers["authorization"]
    const accessToken = authorizationHeader && authorizationHeader.split(" ")[1]

    if (!accessToken || !ACCESS_TOKEN_SECRET)   return next(new NotAuthorizedError())

    try {
        const userPayload = jwt.verify(accessToken, ACCESS_TOKEN_SECRET) as UserPayload
        req.currentUser = userPayload
        next()
    }
    catch (err) {
        next(new NotAuthorizedError())
    }
}
