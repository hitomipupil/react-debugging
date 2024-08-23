import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs/promises";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./setup.js"
    },
    esbuild: {
        loader: "jsx",
        include: /(src)\/.*\.jsx?$/,
        exclude: []
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: { ".js": "jsx" },
            plugins: [
                {
                    name: "load-js-files-as-jsx",
                    setup(build) {
                        build.onLoad(
                            { filter: /(src)\/.*\.js$/ },
                            async (args) => ({
                                loader: "jsx",
                                contents: await fs.readFile(args.path, "utf8")
                            })
                        );
                    }
                }
            ]
        }
    }
});
