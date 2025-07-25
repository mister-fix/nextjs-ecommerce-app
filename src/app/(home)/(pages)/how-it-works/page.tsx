import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRightIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
// import { Icon } from "@/components/ui/icon";

export const metadata: Metadata = {
	title: 'How It Works | Tensell',
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
								<BreadcrumbLink href="/how-it-works">
									How it Works
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
						<h1 className="text-4xl font-bold mb-4">How it works</h1>
						<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
							Start selling your digital content in just a few steps. No tech
							skills required, we&apos;ve designed Tensell to be fast, simple,
							and creator-friendly.
						</p>
					</div>
				</div>
			</section>

			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 bg-muted/50 rounded-2xl">
					<Tabs
						defaultValue="1"
						className="flex flex-col lg:flex-row lg:items-stretch gap-12 py-12 h-full"
					>
						{/* Left Column - Header + Tabs */}
						<div className="lg:w-1/2 flex flex-col">
							{/* Header */}
							<div className="mb-12">
								<h2 className="text-4xl lg:text-5xl font-bold mb-4">
									Sell smarter, not harder
								</h2>
								<p className="text-base text-muted-foreground max-w-3xl">
									Get started in just a few clicks, no tech skills required.
								</p>
							</div>

							{/* Tabs List */}
							<TabsList className="flex flex-col justify-start items-start gap-8 p-0 bg-transparent h-auto flex-1 w-full">
								{[
									{ step: '1', text: 'Create your storefront' },
									{ step: '2', text: 'Upload products' },
									{ step: '3', text: 'Customize your page' },
									{ step: '4', text: 'Start selling instantly' },
								].map(({ step, text }) => (
									<TabsTrigger
										key={step}
										value={step}
										className="bg-muted/90 data-[state=active]:bg-black data-[state=active]:shadow-none h-auto group w-full justify-start px-4 py-3"
									>
										<div className="flex items-center gap-4 w-full">
											{' '}
											{/* Added container div */}
											<p className="text-left text-xl font-medium group-data-[state=active]:text-white flex-1">
												<span className="flex items-center justify-between w-full">
													{text}
													<Icon name="ArrowRight" />
												</span>
											</p>
										</div>
									</TabsTrigger>
								))}
							</TabsList>
						</div>

						{/* Right Column - Content */}
						<div className="lg:w-1/2 flex flex-col">
							<div className="flex-1">
								<TabsContent value="1" className="h-full">
									<div
										className={`break-inside-avoid bg-white h-full border border-neutral-100 rounded-xl p-8 flex flex-col justify-between column-1`}
									>
										<div>
											<h3 className="text-2xl font-bold mb-4">
												Create Your Storefront
											</h3>
											<p className="text-base text-muted-foreground">
												Design a beautiful, responsive storefront that reflects
												your brand identity. Choose from our templates or start
												from scratch.
											</p>
										</div>
										<div className="mt-4">
											{/* Image would go here */}
											<div className="bg-gray-200 w-full h-32 rounded-lg"></div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value="2" className="h-full">
									<div
										className={`break-inside-avoid bg-white h-full border border-neutral-100 rounded-xl p-8 flex flex-col justify-between column-1`}
									>
										<div>
											<h3 className="text-2xl font-bold mb-4">
												Upload Products
											</h3>
											<p className="text-base text-muted-foreground">
												Easily add digital downloads, physical products, or
												services. Set prices, variants, and inventory in just a
												few clicks.
											</p>
										</div>
										<div className="mt-4">
											{/* Image would go here */}
											<div className="bg-gray-200 w-full h-32 rounded-lg"></div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value="3" className="h-full">
									<div
										className={`break-inside-avoid bg-white h-full border border-neutral-100 rounded-xl p-8 flex flex-col justify-between column-1`}
									>
										<div>
											<h3 className="text-2xl font-bold mb-4">
												Customize your page
											</h3>
											<p className="text-base text-muted-foreground">
												Personalize colors, fonts, and layouts to match your
												brand. No coding required, just drag and drop.
											</p>
										</div>
										<div className="mt-4">
											{/* Image would go here */}
											<div className="bg-gray-200 w-full h-32 rounded-lg"></div>
										</div>
									</div>
								</TabsContent>
								<TabsContent value="4" className="h-full">
									<div
										className={`break-inside-avoid bg-white h-full border border-neutral-100 rounded-xl p-8 flex flex-col justify-between column-1`}
									>
										<div>
											<h3 className="text-2xl font-bold mb-4">
												Start Selling Instantly
											</h3>
											<p className="text-base text-muted-foreground">
												Connect payment processors and launch your store. We
												handle the technical details so you can focus on
												selling.
											</p>
										</div>
										<div className="mt-4">
											{/* Image would go here */}
											<div className="bg-gray-200 w-full h-32 rounded-lg"></div>
										</div>
									</div>
								</TabsContent>
							</div>
						</div>
					</Tabs>
				</div>
			</section>

			<section className="text-center space-y-6">
				<h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
					Still have questions?
				</h2>
				<p className="text-muted-foreground text-lg max-w-xl mx-auto">
					We’ve answered the most common questions below. If you&apos;re still
					unsure, feel free to contact us.
				</p>
				<Button asChild size="lg">
					<Link href="/contact">
						Get in touch
						<ArrowRightIcon className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</section>

			<section className="border rounded-2xl p-6 sm:p-10 bg-muted/50">
				<h3 className="text-2xl font-semibold mb-6 text-center">FAQs</h3>
				<div className="space-y-4 max-w-2xl mx-auto">
					<details className="bg-white dark:bg-background border rounded-lg p-4">
						<summary className="font-medium cursor-pointer">
							Do I need to know how to code?
						</summary>
						<p className="mt-2 text-muted-foreground">
							Nope, Tensell is built for creators without technical backgrounds.
							You’ll be up and running in minutes.
						</p>
					</details>
					<details className="bg-white dark:bg-background border rounded-lg p-4">
						<summary className="font-medium cursor-pointer">
							What kind of products can I sell?
						</summary>
						<p className="mt-2 text-muted-foreground">
							You can sell any kind of digital content, downloads, templates,
							guides, music, presets, licenses, and more.
						</p>
					</details>
					<details className="bg-white dark:bg-background border rounded-lg p-4">
						<summary className="font-medium cursor-pointer">
							Is there a free plan?
						</summary>
						<p className="mt-2 text-muted-foreground">
							Yes! We have a free plan with everything you need to start. You
							can upgrade anytime for more features.
						</p>
					</details>
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
							Ready to start selling?
						</h2>
						<p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
							Build your digital storefront and start monetizing your work
							today.
						</p>
						<div className="mt-3">
							<Link
								href="#"
								className="flex items-center justify-center gap-x-2 bg-[#86ee02] text-black font-semibold px-6 py-3 rounded-full hover:bg-white border-2 border-[#03301d] hover:text-green-900 transition duration-300"
							>
								Create your store <Icon name="ArrowRight" size={16} />
							</Link>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
}
