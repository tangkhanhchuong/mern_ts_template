import { Password } from '../services/password'

export const usersSeeder = async () => {
    const password = await Password.toHash('123456')
    return (
        [
            {
                email: 'kane@gmail.com', 
                password
            },
            {
                email: 'messi@gmail.com', 
                password
            },
            {
                email: 'neymar@gmail.com', 
                password
            },
        ]
    )
}
