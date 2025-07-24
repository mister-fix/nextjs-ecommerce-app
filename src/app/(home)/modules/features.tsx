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

export default function Features() {
	return (
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
	);
}
