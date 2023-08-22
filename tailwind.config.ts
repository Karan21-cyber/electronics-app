import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        sm:"500px",
        md:"800px",
        lg:"1200px",
      },
      colors:{
        "light-gray":"#A2A6B0",
        "sky-blue":"#0156FF",
        "light-green":"#78A962",
        "dark-gray":"#666",
        "sade":"#F5F9FF"
      }
    },
  },
  plugins: [],
}
export default config
