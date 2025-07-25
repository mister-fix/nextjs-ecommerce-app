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

			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
