import mongoose from 'mongoose'
import { Password } from '../service/password'

// An interface that describes the properties
// that are required to create a new User
export interface UserAttrs {
	email: string | undefined
	password: string | undefined
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
	build(attrs: UserAttrs): UserDoc
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends UserAttrs, mongoose.Document { }

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		_destroy: {
			type: String,
			default: false
		}
	},
	{
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id
				delete ret._id
				delete ret.password
				delete ret.__v
			}
		}
	}
)

userSchema.pre('save', async function(done) {
	if (this.isModified('password')) {
		const hashedPassword = await Password.toHash(this.get('password'))
		this.set('password', hashedPassword)
	}
	done()
})

userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs)
}

export const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

