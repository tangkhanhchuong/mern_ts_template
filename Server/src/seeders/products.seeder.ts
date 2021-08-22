export const productsSeeder = async () => {
    return (
        [
            {
                name: 'Fried Chicken',
                price: 50000,
                description: 'Ipsum veniam excepteur anim consectetur cillum duis.',
                category: 'MAIN_DISH'
            },
            {
                name: 'Cocacola',
                price: 20000,
                description: 'Ipsum veniam excepteur anim consectetur cillum duis.',
                category: 'BEVERAGE'
            },
            {
                name: 'Fruit',
                price: 50000,
                description: 'Ipsum veniam excepteur anim consectetur cillum duis.',
                category: 'DESSERT'
            }
        ]
    )
}