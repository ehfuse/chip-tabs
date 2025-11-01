import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@ehfuse/chip-tab": path.resolve(__dirname, "../src/index.ts"),
        },
    },
    optimizeDeps: {
        exclude: ["@ehfuse/chip-tab"],
        include: ["@dnd-kit/core", "@dnd-kit/sortable", "@dnd-kit/utilities"],
    },
});
