import { body } from 'express-validator'

const validEmailValidator = body('email').isEmail().withMessage('Email must be valid')

const signUpPasswordValidator = body('password')
                                .trim()
                                .isLength({ min: 4, max: 20 })
                                .withMessage('Password must be between 4 and 20 characters')

const signInPasswordValidator = body('password')
                                .trim()
                                .notEmpty()
                                .withMessage('You must supply a password')

export const AuthValidator = {
    signUp: [validEmailValidator, signUpPasswordValidator],
    signIn: [validEmailValidator, signInPasswordValidator]
}