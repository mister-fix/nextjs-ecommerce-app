import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
	return (
		<>
			{/* Breadcrumb */}
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-12 mt-20">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/pricing">Pricing</BreadcrumbLink>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</section>

			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-16">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<div className="text-center px-4 mb-10">
						<h1 className="text-4xl font-bold text-foreground mb-4">
							Contact Us
						</h1>
						<p className="text-muted-foreground text-lg">
							Got a question, bug, or feedback? We’d love to hear from you.
						</p>
					</div>
					<form className="space-y-6">
						<div className="grid md:grid-cols-2 gap-6">
							<input
								type="text"
								placeholder="Full Name"
								className="w-full border border-border rounded-lg p-3"
							/>
							<input
								type="email"
								placeholder="Email"
								className="w-full border border-border rounded-lg p-3"
							/>
						</div>
						<textarea
							placeholder="Your message..."
							rows={5}
							className="w-full border border-border rounded-lg p-3"
						/>
						<Button
							type="submit"
							size="lg"
							className=" w-max border-2 border-[#03301d] bg-[#86ee02]
							hover:bg-[#03301d] text-[#03301d] hover:text-white text-center font-medium py-6 px-6 h-8 text-base rounded-full transition cursor-pointer"
						>
							Send message
						</Button>
					</form>
				</div>
			</section>

			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-16">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
					<div className="bg-muted/50 rounded-2xl p-12">
						<h3 className="text-xl font-semibold mb-2">
							Looking for quick answers?
						</h3>
						<ul className="list-disc pl-5 text-muted-foreground space-y-1">
							<li>Check our FAQ section</li>
							<li>
								Visit our{' '}
								<a href="/blog" className="underline">
									blog
								</a>{' '}
								for how-tos and tips
							</li>
							<li>Or reach out on Twitter @tensell</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
