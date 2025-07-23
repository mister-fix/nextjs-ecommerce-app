'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavbarSidebar } from './navbar-sidebar';

interface NavbarItemProps {
	path: string;
	children: React.ReactNode;
	isActive?: boolean;
}

const NavbarItem = ({ path, children, isActive }: NavbarItemProps) => {
	return (
		<Button
			asChild
			variant="ghost"
			className={cn(
				'text-base font-medium text-neutral-600/50 hover:text-black transition-colors px-3 py-1 rounded-full border border-transparent hover:border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 cursor-pointer',
				isActive
					&& 'bg-neutral-800/95 text-white hover:bg-black hover:text-white hover:border-black',
			)}
		>
			<Link href={path}>{children}</Link>
		</Button>
	);
};

const navbarItems = [
	{
		path: '/',
		label: 'Home',
		children: 'Home',
	},
	{
		path: '/browse',
		label: 'Browse',
		children: 'Browse',
	},
	{
		path: '/how-it-works',
		label: 'How it Works',
		children: 'How it Works',
	},
	{
		path: '/features',
		label: 'Features',
		children: 'Features',
	},
	{
		path: '/pricing',
		label: 'Pricing',
		children: 'Pricing',
	},
	// {
	// 	path: '/become-a-seller',
	// 	label: 'Become a Seller',
	// 	children: 'Become a Seller',
	// },
];

export const Navbar = () => {
	const pathname = usePathname();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<nav
			aria-label="Main navigation"
			className="w-full h-22 px-4 bg-background/80 backdrop-blur border-b border-border fixed top-0 left-0 z-50 flex flex-row justify-center items-center content-start"
		>
			<div className="w-full max-w-7xl m-auto px-4 sm:px-6 md:px-12">
				<div className="flex flex-row justify-between items-center content-start">
					<Link href="/">
						<Image
							src="/tensell.svg"
							alt="Tensell logo - navbar"
							width={120}
							height={35}
						/>
					</Link>

					<NavbarSidebar
						items={navbarItems}
						open={isSidebarOpen}
						onOpenChange={setIsSidebarOpen}
					/>

					<div className="hidden lg:flex items-center gap-2">
						{navbarItems.map((item) => (
							<NavbarItem
								key={item.label}
								path={item.path}
								isActive={pathname === item.path}
							>
								{item.label}
							</NavbarItem>
						))}
					</div>

					<div className="hidden lg:flex items-center gap-2">
						<Link
							href="#"
							className="text-base font-medium text-neutral-600/50 hover:text-black transition-colors px-3 py-1 rounded-full border border-transparent hover:border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200"
						>
							Log in
						</Link>
						<Link
							href="#"
							className="px-4 py-2 font-medium bg-[#86ee02] rounded-full outline-2 outline-[#03301d] hover:bg-[#03301d] hover:text-white hover transition-colors duration-300"
						>
							Start selling
						</Link>
					</div>

					<div className="flex items-center justify-between lg:hidden">
						<Link
							href="#"
							className="px-4 py-2 font-medium bg-[#86ee02] rounded-full outline-2 outline-[#03301d] hover:bg-[#03301d] hover:text-white hover transition-colors duration-300"
						>
							Start selling
						</Link>

						<Button
							variant="ghost"
							className="size-12"
							onClick={() => setIsSidebarOpen(true)}
						>
							<svg
								width="24"
								height="24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="text-neutral-900"
							>
								<line x1="3" y1="12" x2="21" y2="12" />
								<line x1="3" y1="6" x2="21" y2="6" />
								<line x1="3" y1="18" x2="21" y2="18" />
							</svg>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};
