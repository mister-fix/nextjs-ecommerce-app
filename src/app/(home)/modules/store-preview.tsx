import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function StorePreview() {
	const demoItems = [
		{
			title: 'Branding Toolkit',
			image:
				'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			title: 'Instagram Templates',
			image:
				'https://images.unsplash.com/photo-1611162618758-2a29a995354b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			title: 'UX Audit Guide',
			image:
				'https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			title: 'Sound kits & Music',
			image:
				'https://images.unsplash.com/photo-1504904126298-3fde501c9b31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			title: 'Digital Art',
			image:
				'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			title: 'Streaming Kits',
			image:
				'https://images.unsplash.com/photo-1679065236532-09c4a500a025?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			title: 'Content Academy',
			image:
				'https://images.unsplash.com/photo-1664277497095-424e085175e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
	];

	return (
		<section
			id="store-preview"
			className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24"
		>
			<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
				{/*Header */}
				<div className="flex flex-col items-center text-center mb-12">
					<h2 className="text-4xl lg:text-5xl font-bold mb-4">
						Explore what others are selling
					</h2>
					<p className="text-base text-muted-foreground max-w-4xl">
						Discover digital goods from the Tensell marketplace.
					</p>
				</div>

				{/* Content */}
				<div className="columns-1 sm:columns-2 md:columns-3 gap-4 [&>div]:mb-4">
					{demoItems.map((item) => (
						<div key={item.title} className="break-inside-avoid">
							<Image
								src={item.image}
								alt={item.title}
								width={600}
								height={400}
								className="rounded-xl w-full object-cover"
							/>
							<p className="text-sm mt-2 font-medium text-center">
								{item.title}
							</p>
						</div>
					))}
				</div>
				<Button className="mt-10 mx-auto block" asChild>
					<a href="/marketplace">Browse marketplace</a>
				</Button>
			</div>
		</section>
	);
}
