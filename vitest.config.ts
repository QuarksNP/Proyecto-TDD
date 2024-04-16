/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        reporters: ['json', 'default', 'html'],
        outputFile: './test-output.json'
    },
})