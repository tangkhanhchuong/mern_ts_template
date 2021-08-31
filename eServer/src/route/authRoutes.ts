import express from 'express'

import { validateRequest } from '../middleware/validateRequest'
import { requireAuth } from '../middleware/requireAuth'
import { AuthController } from '../controller'
import { AuthValidator } from '../validator'

const router = express.Router()

router.post('/sign-up', AuthValidator.signUp, validateRequest, AuthController.signUp)

router.post('/sign-in', AuthValidator.signIn, validateRequest, AuthController.signIn)

router.get('/current-user', AuthController.currentUser)

export { router as AuthRouter }
