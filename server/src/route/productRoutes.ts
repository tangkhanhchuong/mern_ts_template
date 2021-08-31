import express from 'express'

import { validateRequest } from '../middleware/validateRequest'
import { ProductController } from '../controller'
import { requireAuth } from '../middleware/requireAuth'
import { ProductValidator } from '../validator'

const router = express.Router()

router.route('/')
    .get(ProductController.getAllProducts)
    .post(ProductValidator.create, validateRequest, requireAuth, ProductController.createProduct)

router.route('/:id')
    .get(ProductController.getProductDetail)
    .patch(ProductController.updateProduct)
    .delete(requireAuth, ProductController.deleteProduct)

export { router as ProductRouter }
