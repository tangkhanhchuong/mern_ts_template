import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { RequestValidationError } from '../services/errors'

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req)

	if (!errors.isEmpty()) 
		return next(new RequestValidationError(errors.array()))

	next()
}
