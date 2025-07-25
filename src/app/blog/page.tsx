import Image from 'next/image';

export default function BlogPage() {
	return (
		<div className="px-4 md:px-8 max-w-7xl mx-auto space-y-16 pb-24">
			<nav className="text-sm text-muted-foreground py-6">Home / Blog</nav>

			<section className="space-y-4">
				<h1 className="text-4xl font-bold text-foreground">Blog</h1>
				<p className="text-muted-foreground text-lg">
					Insights, updates, and stories from the Tensell team and community.
				</p>
			</section>

			<section className="grid md:grid-cols-3 gap-6">
				{[
					{
						title: '10 Products Creators Are Selling Right Now',
						desc: 'Explore what’s trending across the platform and what sells best.',
						image: 'https://source.unsplash.com/featured/?digital-products',
					},
					{
						title: 'How to Market Without Feeling Sleazy',
						desc: 'Our favorite no-fluff tactics to promote your products with confidence.',
						image: 'https://source.unsplash.com/featured/?marketing',
					},
					{
						title: 'Platform Updates – July 2025',
						desc: 'See what’s new and what’s coming soon to Tensell.',
						image: 'https://source.unsplash.com/featured/?updates',
					},
				].map((post) => (
					<div
						key={post.title}
						className="rounded-xl overflow-hidden bg-muted/50"
					>
						<Image
							src={post.image}
							className="w-full h-48 object-cover"
							alt={post.title}
						/>
						<div className="p-4 space-y-2">
							<h3 className="font-semibold text-lg">{post.title}</h3>
							<p className="text-muted-foreground text-sm">{post.desc}</p>
						</div>
					</div>
				))}
			</section>

			<aside className="bg-gradient-to-r from-[#00f58c] to-[#00d87f] text-white p-10 rounded-2xl shadow-xl text-center">
				<h3 className="text-2xl font-semibold">Want insights delivered?</h3>
				<p className="text-white/90 mt-2">
					Sign up for our newsletter and stay in the loop.
				</p>
				<button className="mt-4 bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-100">
					Subscribe Now
				</button>
			</aside>
		</div>
	);
}
