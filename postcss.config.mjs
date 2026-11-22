// Tailwind only emits CSS where a stylesheet contains the @tailwind directives
// (src/app/(services)/services.css). The other pages ship their own hand-written CSS.
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
