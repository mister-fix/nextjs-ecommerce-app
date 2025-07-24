import Link from 'next/link';

export default function Header() {
	return (
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
						subscriptions, and physical products — no coding, no platform fees,
						just pure growth.
					</p>

					{/* CTA */}
					<div className="mt-6">
						<Link
							href="/become-a-seller"
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
	);
}
