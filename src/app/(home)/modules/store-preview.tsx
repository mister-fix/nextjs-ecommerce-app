'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const demoItems = [
	{
		name: 'Branding Toolkit',
		image:
			'https://images.unsplash.com/photo-1633533452148-a9657d2c9a5f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		topSeller: 'Nova Typeface',
		stats: '124 items',
		href: '#',
	},
	{
		name: 'Sound kits & Music',
		image:
			'https://images.unsplash.com/photo-1504904126298-3fde501c9b31?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		topSeller: 'BestSound',
		stats: '33 items',
		href: '#',
	},
	{
		name: 'Digital Art',
		image:
			'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		topSeller: 'AlanArts',
		stats: '49 items',
		href: '#',
	},
	{
		name: 'Content Academy',
		image:
			'https://images.unsplash.com/photo-1664277497095-424e085175e8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		topSeller: 'CreatorCoach',
		stats: '101 items',
		href: '#',
	},
	{
		name: 'Fonts',
		image:
			'https://images.unsplash.com/photo-1753204392401-a424cb95d3e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		topSeller: 'CineGrade FX',
		stats: '86 items',
		href: '#',
	},
	{
		name: 'UX Audit Guide',
		image:
			'https://images.unsplash.com/photo-1576153192396-180ecef2a715?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		topSeller: 'UX Pro Kit',
		stats: '192 items',
		href: '#',
	},
	{
		name: 'Instagram Templates',
		image:
			'https://images.unsplash.com/photo-1611162618758-2a29a995354b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		topSeller: 'CineGrade FX',
		stats: '86 items',
		href: '#',
	},
	{
		name: 'Streaming Kits',
		image:
			'https://images.unsplash.com/photo-1626581806599-d12b0bbd4225?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		topSeller: 'StreamLabs',
		stats: '81 items',
		href: '#',
	},
];

export default function StorePreview() {
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
				<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [&>div]:mb-4">
					{demoItems.map((item) => (
						<motion.div
							key={item.name}
							whileHover={{ scale: 1.03 }}
							whileTap={{ scale: 0.95 }}
							className="transition-transform"
						>
							<Link href={item.href}>
								<Card className="overflow-hidden group cursor-pointer relative p-0 shadow-none">
									<Image
										src={item.image}
										alt={item.name}
										// fill
										className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform mb-0 rounded-bl-xl rounded-br-xl"
										height={400}
										width={400}
										style={{ objectFit: 'cover' }}
									/>
									<CardContent className="pt-0 pb-5 px-5 z-10">
										<div className="z-10 bg-muted/50 rounded-xl py-4 px-5">
											<h3 className="text-xl font-medium mb-1">{item.name}</h3>
											<p className="text-sm text-muted-foreground">
												Top Seller:{' '}
												<span className="font-medium">{item.topSeller}</span>
											</p>
											<p className="text-xs text-muted-foreground mb-2">
												{item.stats}
											</p>
											<Button variant="link" className="p-0 h-auto text-sm">
												Browse →
											</Button>
										</div>
									</CardContent>
								</Card>
							</Link>
						</motion.div>
					))}
				</div>

				<div className="w-full flex items-center justify-center mt-10">
					<Link
						href="/how-it-works"
						className="inline-block bg-[#86ee02] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#03301d] border-2 border-[#03301d] hover:text-white transition duration-300 cursor-pointer"
					>
						<span className="flex items-center justify-center gap-x-2">
							Browse marketplace
							<Icon name="ArrowRight" size={18} />
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
}
