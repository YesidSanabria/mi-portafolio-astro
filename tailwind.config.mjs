/** @type {import('tailwindcss').Config} */
export default {
  files: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
  ],
  
  safelist: [
  "bg-[var(--background-gradient)]",
    "dark:bg-[var(--background-gradient)]",
    "bg-[image:var(--background-gradient)]",
    "dark:bg-[image:var(--background-gradient)]",
],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
}