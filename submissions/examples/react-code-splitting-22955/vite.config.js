import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunk for React and React DOM
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          // Split out EaseMotion CSS related React wrappers into their own chunk
          if (id.includes('src/components/Animate') || id.includes('src/hooks/')) {
            return 'easemotion-react-core';
          }
        },
      },
    },
    // Optional: Warn if chunks are excessively large (though with EaseMotion they shouldn't be)
    chunkSizeWarningLimit: 500,
  },
});
