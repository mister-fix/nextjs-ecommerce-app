import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';
import Image from 'next/image';
import Link from 'next/link';

const features = [
	{
		title: 'Digital products',
		description:
			'Sell eBooks, guides, courses, music, or any downloadable product with ease.',
		image:
			'https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		aspect: 'aspect-[4/5]',
	},
	{
		title: 'Physical products',
		description:
			'From handmade crafts to books and apparel, ship what you love, worldwide.',
		image:
			'https://images.unsplash.com/photo-1745091946162-0433fa716983?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		aspect: 'aspect-[4/5]',
	},
	{
		title: 'Built-in growth tools',
		description:
			'Collect emails, upsell products, offer discounts, and boost your conversions.',
		image:
			'https://images.unsplash.com/photo-1622782914767-404fb9ab3f57?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		aspect: 'aspect-[4/6]',
	},
	{
		title: 'Paid subscriptions',
		description:
			'Launch your own membership or paid newsletter with recurring billing.',
		image:
			'https://cdn.dribbble.com/userupload/43479057/file/original-9c72f257bb47761b7c489176c83df69c.png?resize=1024x768&vertical=center',
		aspect: 'aspect-[4/5]',
	},
	{
		title: 'Print-on-demand',
		description:
			'Design merch and ship automatically, no inventory or upfront costs required.',
		image:
			'https://images.unsplash.com/photo-1527239441953-caffd968d952?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		aspect: 'aspect-[4/5]',
	},
	{
		title: 'Optimized checkout',
		description:
			'Fast, mobile-first checkout pages built to increase conversions and trust.',
		image:
			'https://cdn.dribbble.com/userupload/44110073/file/original-15a33585e1aeaa7923b859288eee6750.png?resize=1024x768&vertical=center',
		aspect: 'aspect-[4/5]',
	},
];

export default function Home() {
	return (
		<>
			<header className="w-full max-w-full py-24 px-4 mt-18">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<div className="text-center bg-[#f4f9ed] rounded-2xl py-24 px-4 lg:px-0">
						{/* Headline */}
						<h1 className="text-4xl md:text-6xl font-bold text-green-950 leading-tight">
							Power your passion.{' '}
							<span className="italic font-bold text-green-900">
								<br />
								Sell smarter{' '}
							</span>
							with Tensell.
						</h1>

						{/* Sub-headline */}
						<p className="mt-4 text-base md:text-lg text-green-800 max-w-2xl mx-auto">
							Launch your digital store in minutes. Sell digital downloads,
							subscriptions, and physical products — no coding, no platform
							fees, just pure growth.
						</p>

						{/* CTA */}
						<div className="mt-6">
							<Link
								href="#"
								className="inline-block bg-[#86ee02] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#03301d] border-2 border-[#03301d] hover:text-white transition duration-300"
							>
								Start selling — it&apos;s free
							</Link>
						</div>

						{/* Trust indicator */}
						<p className="mt-6 text-sm text-green-700">
							💡 Tensell powers creators in over 120 countries
						</p>
					</div>
				</div>
			</header>

			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-black dark:text-white">
							All-in-one creator platform
						</h2>
						<p className="mt-4 text-muted-foreground">
							Built for creators, entrepreneurs, and businesses who want results
							without the tech overwhelm.
						</p>
					</div>

					<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 ">
						{features.map((feature, index) => (
							<div
								key={index}
								className={`break-inside-avoid ${feature.aspect} bg-gray-100 rounded-xl p-6 flex flex-col justify-between column-1`}
							>
								<div>
									<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
								{feature.image && (
									<div className="mt-4">
										{/* Image would go here */}
										<div className="bg-gray-200 w-full h-32 rounded-lg"></div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 ">
					{/* Header */}
					<div className="text-center mb-12">
						<h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
							Everything You Need to Sell Online <br /> Made Simple and
							Affordable
						</h1>
						<p className="text-base text-gray-600 max-w-3xl mx-auto">
							Ditch the juggle of multiple tools. Tensell combines digital
							products, memberships, print-on-demand, and more into one
							platform, with no hidden fees.
						</p>
					</div>

					{/* Pricing Tiers */}
					<div className="grid md:grid-cols-3 gap-8 mb-16">
						{/* Starter Tier */}
						<div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
							<p className="text-4xl font-bold mb-4">
								$15<span className="text-lg text-gray-500">/month</span>
							</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Sell digital & physical products
								</li>
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Print-on-demand integration
								</li>
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Basic email marketing
								</li>
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> No transaction fees
								</li>
							</ul>
							<Link
								href="#"
								className="block w-full border-2 border-[#03301d] bg-[#86ee02]
hover:bg-[#03301d] text-[#03301d] hover:text-white text-center font-medium py-3 px-6 rounded-lg transition"
							>
								Get Started
							</Link>
						</div>

						{/* Growth Tier (highlighted) */}
						<div className="border-2 border-[#03301d] rounded-xl p-6 shadow-md relative">
							<div className="absolute top-0 right-0 bg-[#86ee02] border-2 border-t-0 border-r-0 border-[#03301d] text-[#03301d] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
								POPULAR
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
							<p className="text-4xl font-bold mb-4">
								$22<span className="text-lg text-gray-500">/month</span>
							</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Everything in Starter
								</li>
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Subscriptions & memberships
								</li>
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Advanced analytics
								</li>
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Cart abandonment recovery
								</li>
							</ul>
							<Link
								href="#"
								className="block w-full border-2 border-[#03301d] bg-[#86ee02]
hover:bg-[#03301d] text-[#03301d] hover:text-white text-center font-medium py-3 px-6 rounded-lg transition"
							>
								Start Free Trial
							</Link>
						</div>

						{/* Pro Tier */}
						<div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
							<p className="text-4xl font-bold mb-4">
								$29<span className="text-lg text-gray-500">/month</span>
							</p>
							<ul className="space-y-3 mb-6">
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Everything in Growth
								</li>
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Affiliate marketing tools
								</li>
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Priority support
								</li>
								<li className="flex items-center gap-x-2">
									<Icon name="Check" /> Custom branding
								</li>
							</ul>
							<Link
								href="#"
								className="block w-full border-2 border-[#03301d] bg-[#86ee02]
hover:bg-[#03301d] text-[#03301d] hover:text-white text-center font-medium py-3 px-6 rounded-lg transition"
							>
								Try Pro Free
							</Link>
						</div>
					</div>

					{/* Comparison Table */}
					<div className="bg-gray-50 rounded-xl p-6 mb-12">
						<h2 className="text-2xl font-bold text-center mb-8">
							Why Tensell Beats the Rest
						</h2>
						<div className="hidden md:block overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="border-b border-gray-200">
										<th className="text-left pb-4 font-medium">Feature</th>
										<th className="text-center pb-4 font-medium">
											Tensell ($15+)
										</th>
										<th className="text-center pb-4 font-medium">
											Sellfy ($29+)
										</th>
										<th className="text-center pb-4 font-medium">
											Shopify ($29+)
										</th>
										<th className="text-center pb-4 font-medium">
											Gumroad (10% fees)
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									<tr>
										<td className="py-4 font-medium">Monthly Cost</td>
										<td className="text-center py-4">From $15</td>
										<td className="text-center py-4">From $29</td>
										<td className="text-center py-4">From $29</td>
										<td className="text-center py-4">10% per sale</td>
									</tr>
									<tr>
										<td className="py-4 font-medium">Transaction Fees</td>
										<td className="text-center py-4">0%</td>
										<td className="text-center py-4">0%</td>
										<td className="text-center py-4">2.9% + $0.30</td>
										<td className="text-center py-4">10%</td>
									</tr>
									<tr>
										<td className="py-4 font-medium">All-in-One</td>
										<td className="text-center py-4">
											<Icon name="Check" className="mx-auto" />
										</td>
										<td className="text-center py-4">
											<Icon name="X" className="mx-auto" />
										</td>
										<td className="text-center py-4">
											<Icon name="X" className="mx-auto" />
										</td>
										<td className="text-center py-4">
											<Icon name="X" className="mx-auto" />
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

					{/* CTA */}
					<div className="text-center">
						<h3 className="text-2xl font-bold mb-4">Start Risk-Free</h3>
						<p className="text-base lg:text-lg text-gray-600 mb-6">
							14-day free trial—no card required. Launch your store today and
							keep 100% of your profits.
						</p>
						<Link
							href="#"
							className="flex items-center w-max mx-auto gap-x-2 border-2 border-[#03301d] bg-[#86ee02]
hover:bg-[#03301d] text-[#03301d] hover:text-white text-center font-medium py-3 px-6 rounded-lg transition"
						>
							Start Selling Now <Icon name="ArrowRight" size={16} />
						</Link>
						<p className="mt-4 text-gray-500">
							Need more?{' '}
							<Link href="#" className="text-green-600 hover:underline">
								Compare detailed pricing
							</Link>
							.
						</p>
					</div>
				</div>
			</section>

			<aside className="w-full py-26 flex flex-row items-center justify-stretch">
				<div className="flex flex-row flex-nowrap gap-[40px] justify-start items-start content-start overflow-hidden py-0 px-4 md:px-12 relative w-full container-xl max-w-7xl h-min mx-auto">
					<div className="bg-[#03301d] p-14 rounded-xl opacity-100 flex flex-col shrink-0 flex-nowrap items-center gap-y-4 justify-center overflow-hidden relative w-full text-center">
						<Image
							src="/tensell_alt.svg"
							alt="Tensell logo - aside"
							width={120}
							height={35}
							className="hidden"
						/>
						<Image
							src="/illustrations/oc-puzzle.svg"
							alt="Tensell logo - aside"
							width={220}
							height={220}
							className="hidden lg:absolute left-5 top-15 opacity-90 rotate-12 invert"
						/>
						<Badge className="px-4 py-2 mb-2 text-sm">
							14 day free trial, no card needed
						</Badge>
						<h2 className="text-4xl text-white font-semibold">
							Zero-risk selling starts here
						</h2>
						<p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
							Launch your Tensell store in minutes, no coding or design skills
							needed.
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
