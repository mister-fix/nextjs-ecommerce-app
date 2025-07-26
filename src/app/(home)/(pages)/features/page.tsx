import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Icon } from '@/components/ui/icon';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Features | Tensell',
	description: '',
};

const FeatureSections = [
	{
		icon: 'WalletCards',
		subheading: 'Payment Integration',
		title: 'Built-in Checkout & Licensing',
		description:
			'Tensell includes secure checkout, license key generation, and customer email delivery – so you don’t need to cobble together tools.',
		details: [
			'Stripe-powered secure payments',
			'Custom license key support',
			'Automatic file delivery on purchase',
			'Tax/VAT included',
		],
		benefits: [
			{
				title: 'Stripe integration',
				description:
					'Trusted global checkout that handles all major payment methods and currencies with ease.',
			},
			{
				title: 'License keys',
				description:
					'Auto-generated unique keys for each sale to protect and authenticate your digital products.',
			},
			{
				title: 'Email delivery',
				description:
					'Buyers get instant access with automated delivery emails containing their purchase details.',
			},
			{
				title: 'Refund support',
				description:
					'Handle returns and refunds with just a few clicks through our streamlined dashboard.',
			},
			{
				title: 'Tax ready',
				description:
					'Automatic support for global VAT and sales tax calculations built right into checkout.',
			},
		],
		imageSide: 'right',
		bgImage: '#cddafd',
		bgColor: '#ecf0fe',
		textColor: 'text-blue-900',
	},
	{
		icon: 'ShoppingBag',
		subheading: 'Products',
		title: 'Effortless Product Listings',
		description:
			'Add and manage digital products with ease. Tensell provides a streamlined workflow that lets you get up and running in minutes.',
		details: [
			'Upload files, write product descriptions',
			'Organize with tags and categories',
			'Auto-generate product previews',
			'Edit listings anytime',
		],
		benefits: [
			{
				title: 'Fast setup',
				description:
					'List a product in under a minute with our simplified upload and description process.',
			},
			{
				title: 'Tag support',
				description:
					'Group by type or topic to help customers easily find related products in your store.',
			},
			{
				title: 'Drag-and-drop upload',
				description:
					'Upload files instantly by simply dragging them from your computer to the browser.',
			},
			{
				title: 'Instant edits',
				description:
					'Modify your listing anytime with changes going live immediately after saving.',
			},
			{
				title: 'Live preview',
				description:
					'See changes as you make them with our real-time product preview functionality.',
			},
		],
		imageSide: 'left',
		bgImage: '#cde5b1',
		bgColor: '#f1f5e8',
		textColor: 'text-pink-900',
	},
	{
		icon: 'Presentation',
		subheading: 'Marketing',
		title: 'Marketing That Works for You',
		description:
			'Built-in SEO, analytics, and integrations help you attract buyers and optimize your shop’s performance over time.',
		details: [
			'SEO-optimized product pages',
			'Analytics dashboard',
			'Newsletter & email tools',
			'Meta and OpenGraph tags',
		],
		benefits: [
			{
				title: 'SEO-friendly',
				description:
					'Optimized for search engines with clean URLs, metadata, and structured data.',
			},
			{
				title: 'Email capture',
				description:
					'Grow your audience easily with built-in newsletter signup forms and popups.',
			},
			{
				title: 'Performance tracking',
				description:
					'Real-time analytics showing visitor behavior, conversions, and sales trends.',
			},
			{
				title: 'Social previews',
				description:
					'OpenGraph and Twitter cards that make your products share beautifully.',
			},
			{
				title: 'Integrations',
				description:
					'Connect to email tools, analytics platforms, and marketing automation.',
			},
		],
		imageSide: 'right',
		bgImage: '#FCF2CC',
		bgColor: '#FFFBED',
		textColor: 'text-yellow-900',
	},
	{
		icon: 'Store',
		subheading: 'Customization',
		title: 'Your Store, Your Branding',
		description:
			'Make your shop feel truly yours. Tensell lets you customize everything — from colors to domains — without touching code.',
		details: [
			'Custom domains',
			'Brand colors and logo',
			'Control layout and visibility',
			'White-label experience',
		],
		benefits: [
			{
				title: 'Custom domain',
				description:
					'Use your own URL to maintain brand consistency and professional appearance.',
			},
			{
				title: 'Colors & fonts',
				description:
					'Match your brand identity with complete control over the visual styling.',
			},
			{
				title: 'Logo upload',
				description:
					'Add your brand mark to create a cohesive shopping experience for customers.',
			},
			{
				title: 'Theme control',
				description:
					'Choose light/dark modes and different layout options to suit your style.',
			},
			{
				title: 'White-label',
				description:
					'Remove Tensell branding to present a completely custom storefront.',
			},
		],
		imageSide: 'left',
		bgImage: '#F8DBBA',
		bgColor: '#f5e7d6',
		textColor: 'text-green-900',
	},
];

export default function Page() {
	return (
		<>
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-12 mt-20">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/features">Features</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</section>

			{/* Header */}
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-16">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<div className="text-center bg-[#f4f9ed] rounded-2xl py-12 px-4 lg:px-0">
						<h1 className="text-4xl font-bold text-foreground mb-4">
							Everything you need to sell smarter
						</h1>
						<p className="text-muted-foreground text-lg mx-auto max-w-3xl">
							Tensell helps you launch, sell, and grow your digital business
							with ease, no coding required.
						</p>
					</div>
				</div>
			</section>

			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 text-center">
					<div className="grid md:grid-cols-3 gap-10">
						{[
							{
								title: 'Launch Your Store',
								desc: 'Set up your store in minutes. Add branding, links, and products with no dev help needed.',
							},
							{
								title: 'Sell Any Digital Product',
								desc: 'Courses, eBooks, presets, memberships, downloads—Tensell supports them all.',
							},
							{
								title: 'Keep 100% Ownership',
								desc: 'You control your customers, data, and branding. Tensell just powers the tools.',
							},
							{
								title: 'Customize Freely',
								desc: 'Change colors, fonts, layout, and sections to match your brand vibe.',
							},
							{
								title: 'No Platform Lock-in',
								desc: 'Easily migrate, export customers, or integrate with tools like Zapier.',
							},
							{
								title: 'Fast Payouts',
								desc: 'Get paid instantly via Stripe. No weird holds or delays.',
							},
						].map((feature) => (
							<div key={feature.title} className="bg-muted/50 rounded-xl p-6">
								<h3 className="font-semibold text-xl mb-2 text-foreground">
									{feature.title}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{feature.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Expounded Features Go here*/}
			{FeatureSections.map((feature, index) => (
				<section
					key={index}
					className={`w-full max-w-full px-6 md:px-12 lg:px-20 py-24`}
				>
					<div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12`}>
						<div
							className={`min-h-[400px] rounded-xl md:rounded-4xl mx-auto p-4`}
							style={{ backgroundColor: feature.bgColor }}
						>
							{/* Content */}
							<div
								className={`${feature.imageSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row gap-12 items-stretch`}
							>
								<div className="flex-1 space-y-6 p-0 md:p-8">
									<div
										className="px-4 py-2.5 rounded-full  w-max flex items-center justify-center gap-2"
										style={{ backgroundColor: feature.bgImage }}
									>
										<Icon name={feature.icon} />
										<span className="text-neutral-900">
											{feature.subheading}
										</span>
									</div>
									<h2 className={'text-3xl md:text-4xl font-bold'}>
										{feature.title}
									</h2>
									<p className="text-lg text-gray-700">{feature.description}</p>
									<div
										className="w-full h-96 rounded-xl md:hidden flex items-center justify-center"
										style={{ backgroundColor: feature.bgImage }}
									>
										Image-side
									</div>
									{/* <ul className="space-y-3">
										{feature.details.map((detail, i) => (
											<li key={i} className="flex items-center">
												<Icon
													name="CircleCheckBig"
													className={`mr-2 ${feature.textColor}`}
												/>
												<span className="text-gray-700">{detail}</span>
											</li>
										))}
									</ul> */}
									<div className="md:mt-[125px] grid grid-cols-1 md:grid-cols-2 [&>div]:mb-4 gap-x-0 md:gap-x-10">
										{feature.benefits.map((benefit) => (
											<div key={benefit.title} className="flex flex-col gap-1">
												<h4 className="text-lg font-medium">{benefit.title}</h4>
												<p className="text-base">{benefit.description}</p>
											</div>
										))}
									</div>
								</div>

								{/* Image */}
								<div
									className={`hidden flex-1 md:flex items-center justify-center rounded-3xl`}
									style={{ backgroundColor: feature.bgImage }}
								>
									Image-side
								</div>
							</div>
						</div>
					</div>
				</section>
			))}

			{/* CTA */}
			<aside className="w-full py-26 flex flex-row items-center justify-stretch">
				<div className="flex flex-row flex-nowrap gap-[40px] justify-start items-start content-start overflow-hidden py-0 px-4 md:px-12 relative w-full container-xl max-w-7xl h-min mx-auto">
					<div className="bg-[#03301d] p-14 rounded-xl opacity-100 flex flex-col shrink-0 flex-nowrap items-center gap-y-4 justify-center overflow-hidden relative w-full text-center">
						<Image
							src="/illustrations/oc-puzzle.svg"
							alt="Tensell logo - aside"
							width={220}
							height={220}
							className="hidden lg:absolute left-5 top-15 opacity-90 rotate-12 invert"
						/>
						<h2 className="text-4xl text-white font-semibold">
							Start selling your digital products today
						</h2>
						<p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
							Join hundreds of creators building on Tensell with no fees or
							hassle.
						</p>
						<div className="mt-3">
							<Link
								href="#"
								className="flex items-center justify-center gap-x-2 bg-[#86ee02] text-black font-semibold px-6 py-3 rounded-full hover:bg-white border-2 border-[#03301d] hover:text-green-900 transition duration-300"
							>
								Start your free trial <Icon name="ArrowRight" size={16} />
							</Link>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}
