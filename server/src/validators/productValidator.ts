import { body, ValidationChain } from 'express-validator'

const nameValidator = body('name').isLength({ max: 100 }).withMessage('Product name must be no more than 100 words')
const priceValidator = body('price').isInt({ min: 0 }).withMessage('Product price must be at least 0 dong')
const descriptionValidator = body('description').isLength({ max: 250 }).withMessage('Description must be no more than 250 words')

const notEmptyValidator = (attr: string, chain?: ValidationChain) => {
    if(chain)   return chain.notEmpty().withMessage(`You must supply a ${attr}`)
    return body(attr).notEmpty().withMessage(`You must supply a ${attr}`)
}

export const ProductValidator = {
    create: [
        notEmptyValidator('name', nameValidator), 
        notEmptyValidator('price', priceValidator), 
        descriptionValidator
    ],
    update: [ nameValidator, priceValidator, descriptionValidator ]
}