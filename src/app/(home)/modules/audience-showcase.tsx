import { Icon } from '@/components/ui/icon';
import Link from 'next/link';

export function AudienceShowcase() {
	return (
		<section
			id="audience-showcase"
			className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24"
		>
			<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl lg:text-5xl font-bold mb-4">
						Built for every kind of creator
					</h2>
					<p className="text-base text-muted-foreground max-w-3xl mx-auto">
						Whether you&apos;re building brands, shipping code, writing
						knowledge, designing systems, or selling your sound, Tensell
						empowers every type of creator to earn on their own terms.
					</p>
				</div>

				{/* Content */}
				<div className="flex flex-wrap justify-center gap-4 w-full mx-auto">
					{[
						'Graphic Designers',
						'Web Designers',
						'UX/UI Designers',
						'Course Creators',
						'YouTubers',
						'Podcasters',
						'Newsletter Writers',
						'Indie Game Developers',
						'Web Developers',
						'Frontend Engineers',
						'Indie Hackers',
						'SaaS Founders',
						'Photographers',
						'Illustrators',
						'3D Artists',
						'AR/VR Creators',
						'Motion Designers',
						'App Developers',
						'UI Kit Creators',
						'Content Writers',
						'Coaches & Mentors',
						'Marketing Experts',
						'Spreadsheet Creators',
						'Template Sellers',
						'Icon/Font Designers',
						'E-book Authors',
						'Financial Creators',
						'Indie Brands',
						'Notion Creators',
						'Musicians & Producers',
					].map((label) => (
						<div
							key={label}
							className="bg-muted px-6 py-3 rounded-full text-sm font-medium"
						>
							{label}
						</div>
					))}
				</div>
				<div className="mt-4 w-full flex justify-center">
					<Link
						href="/how-it-works"
						className="inline-block bg-[#86ee02] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#03301d] border-2 border-[#03301d] hover:text-white transition duration-300 cursor-pointer"
					>
						<span className="flex items-center justify-center gap-x-2">
							Become a seller
							<Icon name="ArrowRight" size={18} />
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
