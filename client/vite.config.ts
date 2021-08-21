import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
require('dotenv').config()

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		'process.env': process.env
	},
  	plugins: [reactRefresh()],
	resolve: {
		alias: {
			'@root': path.resolve(__dirname, './src')
		}
	}
})
