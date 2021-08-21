import express from 'express'

import { validateRequest } from '../middlewares/validateRequest'
import { requireAuth } from '../middlewares/requireAuth'
import { AuthController } from '../controllers'
import { AuthValidator } from '../validators'

const router = express.Router()

router.post('/sign-up', AuthValidator.signUp, validateRequest, AuthController.signUp)

router.post('/sign-in', AuthValidator.signIn, validateRequest, AuthController.signIn)

router.get('/current-user', requireAuth, AuthController.currentUser)

export { router as AuthRouter }
