import React, { useEffect, useState } from 'react'

import { IUserProps } from '@root/models'
import authRequest from './core/http/authResponse'

function App() {
	const [ name, setName ] = useState<string>('')

	useEffect(() => {
		const a = async () => {
			const user = { email: 'tkc@gmail.com', password: '123456' } as IUserProps
			const b = await authRequest.signIn(user)
			if(b)	setName(b.data.user.email)
		}
		a()
	}, [])
	return (
		<div>
			Hello { name }
		</div>
	)
}

export default App
