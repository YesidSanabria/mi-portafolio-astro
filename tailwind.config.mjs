/** @type {import('tailwindcss').Config} */
export default {
  files: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
  ],
  
  safelist: [
    "dark:bg-[var(--background-gradient)]",
    "bg-[var(--background-gradient)]",
    "dark:bg-[image:var(--background-gradient)]",
    "bg-[image:var(--background-gradient)]",
],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
}