import mongoose from 'mongoose'

export enum Category {
    STARTER = "STARTER", 
    MAIN_DISH = "MAIN_DISH", 
    DESSERT = "DESSERT", 
    SNACK = "SNACK", 
    BEVERAGE = "BEVERAGE"
}

// An interface that describes the properties
// that are required to create a new Product
export interface ProductAttrs {
	name: string | undefined,
	price: number | undefined,
	description: string | undefined,
	category: Category | undefined
}

// An interface that describes the properties
// that a Product Model has
interface ProductModel extends mongoose.Model<ProductDoc> {
    build(attrs: ProductAttrs): ProductDoc
}

// An interface that describes the properties
// that a Product Document has
interface ProductDoc extends ProductAttrs, mongoose.Document { }

const productSchema = new mongoose.Schema(
	{
		name: {
            type: String,
            required: true
		},
		price: {
            type: Number,
            required: true
		},
		description: {
            type: String
		},
		category: {
            type: String,
			default: "STARTER"
		},
		_destroyed: {
			type: Boolean,
			default: false
		}
	},
	{
		toJSON: {
            transform(doc, ret) {
                ret.id = ret._id
                delete ret._id
                delete ret.__v
            }
		}
	}
)

productSchema.statics.build = (attrs: ProductAttrs) => {
	return new Product(attrs)
}

export const Product = mongoose.model<ProductDoc, ProductModel>('Product', productSchema)
