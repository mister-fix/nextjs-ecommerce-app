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
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<div className="bg-muted/50 rounded-2xl px-6 md:px-12">
						<Tabs
							defaultValue="create"
							className="flex flex-col lg:flex-row lg:items-stretch gap-12 py-12"
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

								{/* Tabs List - now properly contained */}
								<TabsList className="flex flex-col items-start gap-8 p-0 bg-transparent h-auto">
									{[
										{ step: 'create', text: 'Create your storefront' },
										{ step: 'upload', text: 'Upload products' },
										{ step: 'customize', text: 'Customize your page' },
										{ step: 'start', text: 'Start selling instantly' },
									].map(({ step, text }) => (
										<TabsTrigger
											key={step}
											value={step}
											className="data-[state=active]:bg-black data-[state=active]:shadow-none px-4 h-auto group cursor-pointer"
										>
											<div className="flex items-center justify-start">
												{/* <div className="text-5xl font-bold text-primary group-data-[state=active]:text-white transition-colors border w-20 text-left">
													0{i + 1}.
												</div> */}
												<p className="text-xl font-semibold text-primary group-data-[state=active]:text-white transition-colors text-left">
													{text}
												</p>
											</div>
										</TabsTrigger>
									))}
								</TabsList>
							</div>

							{/* Right Column - Content */}
							<div className="lg:w-1/2 h-full">
								<TabsContent value="create" className="h-full">
									<div className="bg-white border h-full w-full rounded-xl p-8 min-h-[400px]">
										<h3 className="text-2xl font-bold mb-4">
											Create Your Storefront
										</h3>
										<p className="text-muted-foreground">
											Sign up for free and instantly get your personalized
											store. No setup headaches, just enter your name, upload a
											profile image, and you&apos;re live.
										</p>
									</div>
								</TabsContent>
								<TabsContent value="upload" className="h-full">
									<div className="bg-white border h-full w-full rounded-xl p-8 min-h-[400px]">
										<h3 className="text-2xl font-bold mb-4">Upload Products</h3>
										<p className="text-muted-foreground">
											Sell digital files, downloads, licenses, and more. Drag
											and drop or import from other platforms.
										</p>
									</div>
								</TabsContent>
								<TabsContent value="customize" className="h-full">
									<div className="bg-white border h-full w-full rounded-xl p-8 min-h-[400px]">
										<h3 className="text-2xl font-bold mb-4">
											Customize Your Page
										</h3>
										<p className="text-muted-foreground">
											Add your branding, update fonts and colors, and arrange
											your product layout however you like.
										</p>
									</div>
								</TabsContent>
								<TabsContent value="start" className="h-full">
									<div className="bg-white border h-full w-full rounded-xl p-8 min-h-[400px]">
										<h3 className="text-2xl font-bold mb-4">
											Start Selling Instantly
										</h3>
										<p className="text-muted-foreground">
											Share your store link anywhere. Buyers can checkout in
											seconds, no accounts required.
										</p>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
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
