import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';


export default defineConfig({
	resolve: {
		alias: {
			$fonts: resolve('./static/fonts'),
		}
	},
	plugins: [sveltekit()]
});
