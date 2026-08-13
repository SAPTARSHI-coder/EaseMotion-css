import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    include: [path.resolve(__dirname, 'rating.test.js')],
  },
});
