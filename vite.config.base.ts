import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export const baseConfig = defineConfig({
    plugins:[react()],
    server:{
        port:3000
    },
    resolve:{
        alias:{
            '@libs':path.resolve(__dirname,'src/libs'),
        }
    }
})