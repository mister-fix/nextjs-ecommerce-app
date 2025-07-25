import { Icon } from '@/components/ui/icon';
import Link from 'next/link';

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
	},
];

export default function Pricing() {
	return (
		<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
			<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 ">
				{/* Header */}
				<div className="text-center mb-12">
					<h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
						Everything You Need to Sell Online <br /> Made Simple and Affordable
					</h1>
					<p className="text-base text-gray-600 max-w-3xl mx-auto">
						Ditch the juggle of multiple tools. Tensell combines digital
						products, memberships, print-on-demand, and more into one platform,
						with no hidden fees.
					</p>
				</div>

				{/* Pricing Tiers */}
				<div className="grid md:grid-cols-3 gap-8 mb-16">
					{pricingTiers.map((tier) => (
						<div
							key={tier.name}
							className={`${tier.popular === true ? 'border-2 border-[#03301d]' : 'border border-gray-200'} rounded-xl p-6 hover:shadow-lg transition-shadow relative`}
						>
							{tier.popular === true ?
								<div className="absolute top-0 right-0 bg-[#86ee02] border-2 border-t-0 border-r-0 border-[#03301d] text-[#03301d] text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
									POPULAR
								</div>
							:	null}
							<h3 className="text-2xl font-bold text-gray-900 mb-2">
								{tier.name}
							</h3>
							<p className="text-4xl font-bold mb-4">
								{tier.price}
								<span className="text-lg text-gray-500">/month</span>
							</p>
							<ul className="space-y-3 mb-6">
								{tier.includes.map((label) => (
									<li key={label} className="flex items-center gap-x-2">
										<Icon name="Check" /> {label}
									</li>
								))}
							</ul>
							<Link
								href="#"
								className="block w-full border-2 border-[#03301d] bg-[#86ee02]
		hover:bg-[#03301d] text-[#03301d] hover:text-white text-center font-medium py-3 px-6 rounded-lg transition"
							>
								Get Started
							</Link>
						</div>
					))}
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
						14-day free trial, no card required. Launch your store today and
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
						<Link
							href="/pricing#compare-pricing"
							className="text-green-600 hover:underline"
						>
							Compare detailed pricing
						</Link>
						.
					</p>
				</div>
			</div>
		</section>
	);
}
