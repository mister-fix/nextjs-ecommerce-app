// import { Icon } from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

export default function HowItWorks() {
	return (
		<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
			<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 bg-muted/50 rounded-2xl">
				<Tabs
					defaultValue="1"
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
								{ step: '1', text: 'Create your storefront' },
								{ step: '2', text: 'Upload products' },
								{ step: '3', text: 'Customize your page' },
								{ step: '4', text: 'Start selling instantly' },
							].map(({ step, text }) => (
								<TabsTrigger
									key={step}
									value={step}
									className="data-[state=active]:bg-black data-[state=active]:shadow-none px-4 h-auto group"
								>
									<div className="flex items-center gap-6">
										<div className="text-5xl font-bold text-primary group-data-[state=active]:text-white transition-colors">
											{step}
										</div>
										<p className="text-lg font-medium text-left group-data-[state=active]:text-white">
											{text}
										</p>
									</div>
								</TabsTrigger>
							))}
						</TabsList>
					</div>

					{/* Right Column - Content */}
					<div className="lg:w-1/2 h-full">
						<TabsContent value="1" className="h-full">
							<div className="bg-white border h-full w-full rounded-xl p-8 min-h-[400px]">
								<h3 className="text-2xl font-bold mb-4">
									Create Your Storefront
								</h3>
								<p className="text-muted-foreground">
									Design a beautiful, responsive storefront that reflects your
									brand identity. Choose from our templates or start from
									scratch.
								</p>
							</div>
						</TabsContent>
						<TabsContent value="2" className="h-full">
							<div className="bg-white border h-full w-full rounded-xl p-8 min-h-[400px]">
								<h3 className="text-2xl font-bold mb-4">Upload Products</h3>
								<p className="text-muted-foreground">
									Easily add digital downloads, physical products, or services.
									Set prices, variants, and inventory in just a few clicks.
								</p>
							</div>
						</TabsContent>
						<TabsContent value="3" className="h-full">
							<div className="bg-white border h-full w-full rounded-xl p-8 min-h-[400px]">
								<h3 className="text-2xl font-bold mb-4">Customize Your Page</h3>
								<p className="text-muted-foreground">
									Personalize colors, fonts, and layouts to match your brand. No
									coding required - just drag and drop.
								</p>
							</div>
						</TabsContent>
						<TabsContent value="4" className="h-full">
							<div className="bg-white border h-full w-full rounded-xl p-8 min-h-[400px]">
								<h3 className="text-2xl font-bold mb-4">
									Start Selling Instantly
								</h3>
								<p className="text-muted-foreground">
									Connect payment processors and launch your store. We handle
									the technical details so you can focus on selling.
								</p>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</section>
	);
}
