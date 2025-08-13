import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
// https://vite.dev/config/
export default defineConfig({
  base: isGitHubPages ? '/portafolio/' : './',
  plugins: [react(), svgr()],
})
