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
	title: 'Become a Seller | Tensell',
	description: 'A step-by-step guide to selling digital content with Tensell.',
};

export default function Page() {
	return (
		<>
			{/* Breadcrumbs */}
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-12 mt-20">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/become-a-seller">
									Become a Seller
								</BreadcrumbLink>
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
							Become a Seller
						</h1>
						<p className="text-muted-foreground text-lg mx-auto max-w-3xl">
							Join a growing platform made for creators who want to sell digital
							products, hassle-free.
						</p>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								title: 'Fast onboarding',
								desc: 'Create your store in minutes — no tech skills required.',
							},
							{
								title: 'Audience-first design',
								desc: 'Your store looks great on every device, optimized for discovery.',
							},
							{
								title: 'No upfront costs',
								desc: 'Start for free and upgrade when you’re ready to grow.',
							},
						].map((item) => (
							<div key={item.title} className="bg-muted/50 p-6 rounded-xl">
								<h3 className="text-xl font-semibold mb-2">{item.title}</h3>
								<p className="text-muted-foreground">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Process Illustration */}
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div className="space-y-4">
							<h2 className="text-2xl font-bold">
								Start selling in 4 simple steps
							</h2>
							<ol className="list-decimal pl-4 space-y-2 text-muted-foreground">
								<li>Sign up and name your store</li>
								<li>Upload your products and set pricing</li>
								<li>Customize your storefront with your brand</li>
								<li>Go live and start selling instantly</li>
							</ol>
						</div>
						<Image
							src="https://images.unsplash.com/photo-1533312976185-c6f84ac1cb6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRpZ2l0YWwlMjB3b3Jrc3BhY2V8ZW58MHx8MHx8fDI%3D"
							alt="How to sell illustration"
							className="rounded-xl"
							height={300}
							width={300}
						/>
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
							Ready to sell smarter?
						</h2>
						<p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
							Join thousands of creators launching their digital stores on
							Tensell.
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
