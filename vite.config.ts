/// <reference types="vitest/config" />
/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';


// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [tailwindcss(), react()],
  optimizeDeps: {
    include: ['@storybook/addon-vitest', 'aria-query', '@testing-library/dom', '@testing-library/user-event']
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, './src')
    }
  },
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'PixelForge',
      fileName: 'pixel-forge'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        }
      }
    }
  },
  test: {
    projects: [
      {
        extends: true,
        test: {
          environment: 'jsdom',
          globals: true,
          setupFiles: './src/test/setup.ts',
          include: ['src/**/*.test.{ts,tsx}']
        }
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: resolve(import.meta.dirname, '.storybook')
          })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }]
          },
          server: {
            deps: {
              inline: [/.*/]
            }
          }
        }
      }
    ]
  }
});