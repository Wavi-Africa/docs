import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://waviafrica.com',
	base: '/docs',
	trailingSlash: 'ignore',
	integrations: [
		starlight({
			title: 'Wavi Africa Docs',
			description: 'SMS, Email, OTP and WhatsApp APIs for Africa.',
			logo: {
				light: './src/assets/wavi-icon.png',
				dark: './src/assets/wavi-icon.png',
				alt: 'Wavi Africa'
			},
			social: [],
			editLink: {
				baseUrl: 'https://github.com/wavi-africa/docs/edit/main/'
			},
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Introduction', link: '/' },
						{ label: 'Quickstart', autogenerate: { directory: 'quickstart' } }
					]
				},
				{ label: 'SMS', autogenerate: { directory: 'sms' } },
				{ label: 'Email', autogenerate: { directory: 'email' } },
				{ label: 'OTP', autogenerate: { directory: 'otp' } },
				{ label: 'WhatsApp', autogenerate: { directory: 'whatsapp' } },
				{ label: 'API Reference', autogenerate: { directory: 'api-reference' } }
			],
			customCss: ['./src/styles/custom.css']
		})
	]
});
