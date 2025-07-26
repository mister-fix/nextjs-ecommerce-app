import { Icon } from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function HowItWorks() {
	return (
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
										<h3 className="text-2xl font-bold mb-4">Upload Products</h3>
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
											handle the technical details so you can focus on selling.
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
	);
}
