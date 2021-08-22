import express from 'express'

import { validateRequest } from '../middlewares/validateRequest'
import { ProductController } from '../controllers'
import { requireAuth } from '../middlewares/requireAuth'
import { ProductValidator } from '../validators'

const router = express.Router()

router.route('/')
    .get(ProductController.getAllProducts)
    .post(ProductValidator.create, validateRequest, requireAuth, ProductController.createProduct)

router.route('/:id')
    .get(ProductController.getProductDetail)
    .patch(ProductController.updateProduct)
    .delete(requireAuth, ProductController.deleteProduct)

export { router as ProductRouter }
