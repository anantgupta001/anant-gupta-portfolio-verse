import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
		screens: {
			'xs': '475px',
			'2xl': '1400px'
		}
		},
		fontFamily: {
			sans: ['Poppins', 'Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				background: {
					light: '#d2e9ff',   // Main light bluish background
					dark: '#0a0f1c',    // Deep navy blue (bluer than pure black)
				},
				card: {
					light: '#ffffff',   // Card background
					dark: '#121a2f',    // Soft navy card background
				},
				accent: {
					light: '#2563eb',   // Primary accent (blue-600)
					dark: '#3b82f6',    // Slightly softer vibrant blue
				},
				secondary: {
					light: '#60a5fa',   // Secondary accent (blue-400)
					dark: '#60a5fa',    // Same tone keeps theme consistent
				},
				border: {
					light: '#bfdbfe',   // Border color (blue-200)
					dark: '#1f2a3a',    // Subtle blue-gray edge
				},
				heading: {
					light: '#1e293b',   // Heading text (slate-800)
					dark: '#e2e8f0',   // Blue-500 for dark headings
				},
				subtitle: {
					light: '#475569',   // Subtitle text (slate-600)
					dark: '#94a3b8',    // Slate-400 for subtle text
				},
				muted: {
					light: '#64748b',   // Muted text (slate-500)
					dark: '#64748b',    // Keep muted tone same
				},
				link: {
					light: '#1d4ed8',   // Link color (blue-700)
					dark: '#60a5fa',    // Light blue for contrast
				},
				hover: {
					light: '#1e40af',   // Hover blue (blue-900)
					dark: '#3b82f6',    // Match with accent
				},
				shadow: {
					light: 'rgba(0,0,0,0.05)', // Light shadow
					dark: 'rgba(0,0,0,0.4)',   // Soft dark shadow
				},
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
