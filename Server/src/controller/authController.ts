import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import { User, UserAttrs } from '../model'
import { Password } from '../service/password'
import { BadRequestError } from '../service/errors'

const signUp = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body as UserAttrs
	const existingUser = await User.findOne({ email })
	if (existingUser) next(new BadRequestError('Email in use'))

	const user = User.build({ email, password })
	try {
		await user.save()
		res.status(201).json(user)
	}
	catch(err) {
		next(err)
	}
}

const signIn = async (req: Request, res: Response, next: NextFunction) => {
	const { email, password } = req.body

	const existingUser = await User.findOne({ email })
	if (!existingUser) return next(new BadRequestError('Invalid Credentials'))

	const passwordsMatch = await Password.compare(existingUser.password || "", password)
	if (!passwordsMatch)  return next(new BadRequestError('Invalid Credentials'))

	try {
		const accessToken = jwt.sign(
		{
			id: existingUser.id,
			email: existingUser.email,
		},
		process.env.ACCESS_TOKEN_SECRET!
		)
		res.json({ 
			user: existingUser,
			accessToken 
		})
	}
	catch(err) {
		next(err)
	}
}

const currentUser = async (req: Request, res: Response, next: NextFunction) => {
	const users = await User.find()
  	res.json({
		  users
	  })
}

export const AuthController = {
    signUp, signIn, currentUser
}