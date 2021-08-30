import { Request, Response, NextFunction } from 'express'

import { Product, ProductAttrs} from '../model'

const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await Product.find({ _destroyed: false })
        res.json({ total: products.length, products })
    }
    catch(err) {
        next(err)
    }
}

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { name, price, description, category } = req.body as ProductAttrs

    const newProduct = Product.build({ name, price, description, category })
    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    }
    catch(err) {
        next(err)
    }
}

const getProductDetail = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body
    try {
        const productDetail = await Product.findOne({ name, _destroyed: false }) 
        res.json({ productDetail })
    }
    catch(err) {
        next(err)
    }
}

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate({ _id: req.params.id },  { $set: req.body }, { new: true })
        res.json(updatedProduct)
    }
    catch(err) {
        next(err)
    }
}

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Product.findOneAndUpdate({ _id: req.params.id }, { $set: { _destroyed: true } })
        res.json({})
    }
    catch(err) {
        next(err)
    }
}

export const ProductController = {
    getAllProducts, createProduct,
    getProductDetail, updateProduct, deleteProduct
}