// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [
//       {
//         find: 'shared',
//         replacement: path.resolve(__dirname, 'src/shared')
//       }
//     ]
//   },
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: 'shared',
        replacement: path.resolve(__dirname, 'src/shared')
      },
      { find: 'process', replacement: 'process/browser' },
      { find: 'util', replacement: 'util' }
    ]
  },
  define: {
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      EXCALIDRAW_ASSET_PATH: JSON.stringify('/excalidraw-assets')
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  publicDir: 'public',
  server: {
    hmr: {
      overlay: false, // Disable the HMR error overlay
    },
  },

})