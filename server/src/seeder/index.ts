import { connectToMongoDb } from '../config/database'
import { User, Product } from '../model'
import { productsSeeder } from './products.seeder'
import { usersSeeder } from './users.seeder'

const startSeeding = async () => {
    await connectToMongoDb()
    const users = await usersSeeder()
    const products = await productsSeeder()

    User.deleteMany({})
    Product.deleteMany({})

    User.insertMany(users)
    Product.insertMany(products)
}

startSeeding()