import bcrypt from 'bcrypt'

export class Password {
	static async toHash(password: string) {
		const salt = await bcrypt.genSalt()
		const hashPassword = await bcrypt.hash(password, salt)
		return hashPassword
	}

	static compare(storedPassword: string, suppliedPassword: string) {
		return bcrypt.compare(suppliedPassword, storedPassword)
	}
}
