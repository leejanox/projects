import { resolve } from "path";
import { defineConfig, mergeConfig } from "vite";
import { baseConfig } from "../../vite.config.base";

export default defineConfig(
    mergeConfig(
        baseConfig,{
                root:__dirname,
                build:{
                    outdir:'dist',
                    emptyOutDir:true
                },
                resolve:{
                    alias:{
                        '@components':resolve(__dirname, "src/components"),
                        '@assets':resolve(__dirname, "src/assets"),
                        '@shared':resolve(__dirname, "../../libs/shared")
                }
            }
        }
    )
)