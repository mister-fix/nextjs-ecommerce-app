import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Icon } from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
	title: 'Pricing | Tensell',
	description:
		'Tensell offers flexible pricing for digital sellers. Compare plans and discover what works best for your store.',
};

const pricingTiers = [
	{
		name: 'Starter',
		price: '$15',
		includes: [
			'Sell digital & physical products',
			'Print-on-demand integration',
			'Basic email marketing',
			'No transaction fees',
		],
		popular: false,
		extras: [],
	},
	{
		name: 'Creator',
		price: '$22',
		includes: [
			'Everything in Starter',
			'Subscription & memberships',
			'Advanced analytics',
			'Cart abandonment recovery',
		],
		popular: true,
		extras: [
			'Product upselling',
			'Cart abandonment recovery',
			'Affiliate marketing',
		],
	},
	{
		name: 'Pro',
		price: '$29',
		includes: [
			'Everything in Growth',
			'Affiliate marketing tools',
			'Priority support',
			'Custom branding',
		],
		popular: false,
		extras: [
			'Product upselling',
			'Cart abandonment',
			'Affiliate marketing',
			'Priority support',
		],
	},
];

const yearlyTiers = [
	{
		name: 'Starter',
		price: '$12',
		includes: [
			'Sell digital & physical products',
			'Print-on-demand integration',
			'Basic email marketing',
			'No transaction fees',
		],
		popular: false,
		extras: [],
	},
	{
		name: 'Creator',
		price: '$17',
		includes: [
			'Everything in Starter',
			'Subscription & memberships',
			'Advanced analytics',
			'Unlimited products',
		],
		popular: true,
		extras: [
			'Product upselling',
			'Cart abandonment recovery',
			'Affiliate marketing',
		],
	},
	{
		name: 'Pro',
		price: '$23',
		includes: [
			'Everything in Growth',
			'Affiliate marketing tools',
			'Priority support',
			'Custom branding',
			'Email marketing',
			'Core marketing features',
		],
		popular: false,
		extras: [
			'Product upselling',
			'Cart abandonment',
			'Affiliate marketing',
			'Priority support',
		],
	},
];

export default function Page() {
	return (
		<>
			{/* Breadcrumb */}
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-12 mt-20">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/pricing">Pricing</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</section>

			{/* Hero Section */}
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-16">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<div className="text-center bg-[#f4f9ed] rounded-2xl py-12 px-4 lg:px-0">
						<h1 className="text-4xl font-bold mb-4">
							Flexible pricing that grows with you
						</h1>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							Whether you&apos;re just starting or scaling fast, Tensell has a
							plan that fits.
						</p>
					</div>
				</div>
			</section>

			{/* Pricing Tiers */}
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<Tabs defaultValue="monthly">
						<TabsList>
							<TabsTrigger value="monthly">Monthly</TabsTrigger>
							<TabsTrigger value="yearly">Yearly (save 20%)</TabsTrigger>
						</TabsList>
						<TabsContent value="monthly">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
								{pricingTiers.map((tier) => (
									<Card
										key={tier.name}
										className={`border-2 shadow-none ${tier.popular === true ? ' border-[#03301d]' : 'border-gray-200/50'} rounded-xl p-6 hover:shadow-lg transition-shadow relative hover:border-[#03301d]`}
									>
										{tier.popular === true ?
											<div className="absolute top-0 right-0 bg-[#86ee02] border-2 border-t-0 border-r-0 border-[#03301d] text-[#03301d] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
												POPULAR
											</div>
										:	null}
										<CardHeader>
											<CardTitle className="text-2xl font-bold text-gray-900 mb-2">
												{tier.name}
											</CardTitle>
											<CardDescription className="text-4xl  text-gray-900font-bold mb-4">
												{tier.price}
												<span className="text-lg text-gray-500">/month</span>
											</CardDescription>
										</CardHeader>
										<CardContent className="flex flex-col">
											<ul className="space-y-3 mb-6">
												{tier.includes.map((label) => (
													<li key={label} className="flex items-center gap-x-2">
														<Icon name="Check" /> {label}
													</li>
												))}
											</ul>
											{tier.extras.length > 0 ?
												<div className="flex flex-col gap-y-6">
													<span className="text-muted-foreground">
														Growth features
													</span>
													<ul className="mt-3 space-y-3">
														{tier.extras.map((label) => (
															<li
																key={label}
																className="flex items-center gap-x-2"
															>
																<Icon name="Check" /> {label}
															</li>
														))}
													</ul>
												</div>
											:	null}
											{/* <Link
												href="#"
												className="block w-full border-2 border-[#03301d] bg-[#86ee02]
							hover:bg-[#03301d] text-[#03301d] hover:text-white text-center font-medium py-3 px-6 rounded-lg transition"
											>
												Get Started
											</Link> */}
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>
						<TabsContent value="yearly">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
								{yearlyTiers.map((tier) => (
									<Card
										key={tier.name}
										className={`border-2 shadow-none ${tier.popular === true ? ' border-[#03301d]' : 'border-gray-200/50'} rounded-xl p-6 hover:shadow-lg transition-shadow relative hover:border-[#03301d]`}
									>
										{tier.popular === true ?
											<div className="absolute top-0 right-0 bg-[#86ee02] border-2 border-t-0 border-r-0 border-[#03301d] text-[#03301d] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
												POPULAR
											</div>
										:	null}
										<CardHeader>
											<CardTitle className="text-2xl font-bold text-gray-900 mb-2">
												{tier.name}
											</CardTitle>
											<CardDescription className="text-4xl  text-gray-900font-bold mb-4">
												{tier.price}
												<span className="text-lg text-gray-500">/month</span>
											</CardDescription>
										</CardHeader>
										<CardContent className="flex flex-col">
											<ul className="space-y-3 mb-6">
												{tier.includes.map((label) => (
													<li key={label} className="flex items-center gap-x-2">
														<Icon name="Check" /> {label}
													</li>
												))}
											</ul>
											{tier.extras.length > 0 ?
												<div className="flex flex-col gap-y-6">
													<span className="text-muted-foreground">
														Growth features
													</span>
													<ul className="mt-3 space-y-3">
														{tier.extras.map((label) => (
															<li
																key={label}
																className="flex items-center gap-x-2"
															>
																<Icon name="Check" /> {label}
															</li>
														))}
													</ul>
												</div>
											:	null}
											{/* <Link
												href="#"
												className="block w-full border-2 border-[#03301d] bg-[#86ee02]
							hover:bg-[#03301d] text-[#03301d] hover:text-white text-center font-medium py-3 px-6 rounded-lg transition"
											>
												Get Started
											</Link> */}
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>
					</Tabs>
					{/* Free Plan
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Starter</CardTitle>
							<p className="text-sm text-muted-foreground mt-2">
								Great for testing the waters
							</p>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-3xl font-bold">
								$0<span className="text-base font-normal">/mo</span>
							</p>
							<ul className="space-y-2 text-sm">
								<li>✓ 1 Product</li>
								<li>✓ 5% transaction fee</li>
								<li>✓ Instant checkout</li>
								<li>✓ Branded Tensell page</li>
							</ul>
							<Button className="w-full bg-green-500 hover:bg-green-600 text-white">
								Get Started
							</Button>
						</CardContent>
					</Card>

					{/* Creator Plan
					<Card className="border-2 border-green-600 shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl">Creator</CardTitle>
							<p className="text-sm text-muted-foreground mt-2">
								For growing digital sellers
							</p>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-3xl font-bold">
								$19<span className="text-base font-normal">/mo</span>
							</p>
							<ul className="space-y-2 text-sm">
								<li>✓ 25 Products</li>
								<li>✓ 2% transaction fee</li>
								<li>✓ Custom branding & colors</li>
								<li>✓ Analytics dashboard</li>
								<li>✓ Email capture & marketing tools</li>
							</ul>
							<Button className="w-full bg-green-600 hover:bg-green-700 text-white">
								Start Selling
							</Button>
						</CardContent>
					</Card>

					{/* Pro Plan
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Pro</CardTitle>
							<p className="text-sm text-muted-foreground mt-2">
								For serious storefronts
							</p>
						</CardHeader>
						<CardContent className="space-y-4">
							<p className="text-3xl font-bold">
								$49<span className="text-base font-normal">/mo</span>
							</p>
							<ul className="space-y-2 text-sm">
								<li>✓ Unlimited Products</li>
								<li>✓ 0% transaction fee</li>
								<li>✓ Custom domain support</li>
								<li>✓ Advanced integrations</li>
								<li>✓ Priority support</li>
							</ul>
							<Button className="w-full bg-green-500 hover:bg-green-600 text-white">
								Upgrade Now
							</Button>
						</CardContent>
					</Card> */}
				</div>
			</section>

			{/* Feature Comparison Table */}
			<section
				className="w-full max-w-full px-6 md:px-12 lg:px-20 py-10"
				id="compare-pricing"
			>
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<div className="overflow-x-auto">
						{/* Comparison Table */}
						<div className="bg-gray-50 rounded-xl p-6 mb-12">
							<h2 className="text-2xl font-bold text-center mb-8">
								Compare our plans
							</h2>
							<div className="hidden md:block overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="border-b border-gray-200">
											<th className="text-left text-xl pb-4 font-medium">
												Features
											</th>
											<th className="text-center text-xl pb-4 font-medium">
												Starter ($15)
											</th>
											<th className="text-center text-xl pb-4 font-medium">
												Creator ($22)
											</th>
											<th className="text-center text-xl pb-4 font-medium">
												Pro $(29)
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200">
										<tr>
											<td className="py-4 font-medium">Transaction Fees</td>
											<td className="text-center py-4">0%</td>
											<td className="text-center py-4">0%</td>
											<td className="text-center py-4">0%</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">Annual Sales Volume</td>
											<td className="text-center py-4">Up to $50k</td>
											<td className="text-center py-4">Up to $100k</td>
											<td className="text-center py-4">Up to $200k</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">Digital Products</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">Subscriptions</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">
												Memberships & Paywalled Content
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">
												Product Upload Storage
											</td>
											<td className="text-center py-4">10GB</td>

											<td className="text-center py-4">15GB</td>
											<td className="text-center py-4">20GB</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">
												Custom Checkout Fields
											</td>
											<td className="text-center py-4">
												<Icon name="X" />
											</td>

											<td className="text-center py-4">
												<Icon name="X" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">
												Product Migration Assistance
											</td>
											<td className="text-center py-4">
												<Icon name="X" />
											</td>

											<td className="text-center py-4">
												<Icon name="X" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">Storefront Themes</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">
												Store Layout Customization
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">Coupon Codes</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">Customer Reviews</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">Email Marketing</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">
												Upsell & Cross-sell Features
											</td>
											<td className="text-center py-4">
												<Icon name="X" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">
												Cart Abandonment Recovery
											</td>
											<td className="text-center py-4">
												<Icon name="X" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">
												Affiliate Program Tools
											</td>
											<td className="text-center py-4">
												<Icon name="X" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">
												Built-in Analytics Dashboard
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">
												AI Product Copy Generator
											</td>
											<td className="text-center py-4">Limited</td>

											<td className="text-center py-4">Unlimited</td>
											<td className="text-center py-4">Unlimited</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">AI Image Generator</td>
											<td className="text-center py-4">
												<Icon name="X" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">Priority Support</td>
											<td className="text-center py-4">
												<Icon name="X" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
										<tr>
											<td className="py-4 font-medium">24/7 Email Support</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>

											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
											<td className="text-center py-4">
												<Icon name="Check" />
											</td>
										</tr>
									</tbody>
								</table>
							</div>

							{/* Mobile comparison cards */}
							<div className="md:hidden space-y-4">
								{[
									{
										feature: 'Monthly Cost',
										tensell: 'From $15',
										competitors: [
											{ name: 'Sellfy', value: 'From $29' },
											{ name: 'Shopify', value: 'From $29' },
											{ name: 'Gumroad', value: '10% per sale' },
										],
									},
									{
										feature: 'Transaction Fees',
										tensell: '0%',
										competitors: [
											{ name: 'Sellfy', value: '0%' },
											{ name: 'Shopify', value: '2.9% + $0.30' },
											{ name: 'Gumroad', value: '10%' },
										],
									},
									{
										feature: 'All-in-One',
										tensell: <Icon name="Check" />,
										competitors: [
											{ name: 'Sellfy', value: <Icon name="X" /> },
											{ name: 'Shopify', value: <Icon name="X" /> },
											{ name: 'Gumroad', value: <Icon name="X" /> },
										],
									},
								].map((item, index) => (
									<div
										key={index}
										className="bg-white p-4 rounded-lg border border-gray-200"
									>
										<h3 className="font-bold text-lg mb-3">{item.feature}</h3>

										<div className="space-y-3">
											<div className="flex justify-between items-center p-2 bg-[#f2f6e9] rounded">
												<span className="font-medium">Tensell</span>
												<span className="font-semibold">{item.tensell}</span>
											</div>

											{item.competitors.map((competitor, i) => (
												<div
													key={i}
													className="flex justify-between items-center p-2 border-b border-gray-100 last:border-0"
												>
													<span>{competitor.name}</span>
													<span>{competitor.value}</span>
												</div>
											))}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<h2 className="text-2xl font-semibold mb-4 text-center">
						Frequently Asked Questions
					</h2>
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="q1">
							<AccordionTrigger>Can I switch plans later?</AccordionTrigger>
							<AccordionContent>
								Absolutely. You can upgrade or downgrade anytime with no
								penalty.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="q2">
							<AccordionTrigger>Is there a free trial?</AccordionTrigger>
							<AccordionContent>
								You can use the Starter plan for free forever. No card required.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="q3">
							<AccordionTrigger>Are there any hidden fees?</AccordionTrigger>
							<AccordionContent>
								Nope. What you see is what you pay. We believe in transparent
								pricing.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</section>

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
							Start selling in minutes
						</h2>
						<p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
							Join thousands of creators monetizing their work with Tensell.
						</p>
						<div className="mt-3">
							<Link
								href="#"
								className="flex items-center justify-center gap-x-2 bg-[#86ee02] text-black font-semibold px-6 py-3 rounded-full hover:bg-white border-2 border-[#03301d] hover:text-green-900 transition duration-300"
							>
								Get started for free <Icon name="ArrowRight" size={16} />
							</Link>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}
