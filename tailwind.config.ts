
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
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// SwipeFit custom colors
				swipefit: {
					black: '#000000',
					neonGreen: '#00FF88',
					electricPurple: '#BC00FF',
				},
			},
			fontFamily: {
				'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
				'exo': ['"Exo 2"', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 10px rgba(188, 0, 255, 0.8), 0 0 20px rgba(0, 255, 136, 0.5)'
					},
					'50%': { 
						textShadow: '0 0 20px rgba(188, 0, 255, 0.8), 0 0 30px rgba(0, 255, 136, 0.5)' 
					},
				},
				'shimmer': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' },
				},
				'rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' },
				},
				'swipe-right': {
					'0%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateX(100px) rotate(10deg)', opacity: '0' },
				},
				'swipe-left': {
					'0%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateX(-100px) rotate(-10deg)', opacity: '0' },
				},
				'glitch-text': {
					'0%, 100%': { transform: 'none', opacity: '1' },
					'10%': { transform: 'skew(-15deg)', opacity: '0.8' },
					'20%': { transform: 'translateX(5px)', opacity: '0.9' },
					'30%': { transform: 'none', opacity: '1' },
					'40%': { transform: 'skew(10deg)', opacity: '0.8' },
					'50%': { transform: 'translateX(-5px)', opacity: '0.9' },
					'60%': { transform: 'none', opacity: '1' },
				},
				'slider': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(calc(-1 * (8 * (32px + 32px))))' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'rotate': 'rotate 20s linear infinite',
				'swipe-right': 'swipe-right 0.5s forwards',
				'swipe-left': 'swipe-left 0.5s forwards',
				'glitch-text': 'glitch-text 3s infinite',
			},
			backgroundImage: {
				'gradient-mesh': 'radial-gradient(circle at 10% 20%, #BC00FF 0%, transparent 50%), radial-gradient(circle at 90% 80%, #00FF88 0%, transparent 50%), linear-gradient(180deg, #000000 0%, #000000 100%)',
				'holographic': 'linear-gradient(90deg, #000 10%, #BC00FF 50%, #00FF88 60%, #000 90%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
