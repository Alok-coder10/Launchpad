import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink:'#182230', muted:'#667085', brand:'#635BFF', canvas:'#F7F8FC', line:'#EAECF0' }, boxShadow:{soft:'0 8px 30px rgba(16,24,40,.05)'} } }, plugins: [] };
export default config;
