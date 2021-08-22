import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
require('dotenv').config()

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh()],
	define: {
		'process.env': process.env
	},
	server: {
		host: '0.0.0.0',
		port: 3000
	},
	resolve: {
		alias: {
			'@root': path.resolve(__dirname, './src')
		}
	}
})
