import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/icon';
import Link from 'next/link';

const footerLinks = {
	groupA: [
		{ path: '#', label: 'All features' },
		{ path: '#', label: 'Sell digital downloads' },
		{ path: '#', label: 'Sell print-on-demand' },
		{ path: '#', label: 'Sell subscriptions' },
		{ path: '#', label: 'Sell physical products' },
		{ path: '#', label: 'POD catalog' },
		{ path: '#', label: 'Pricing' },
	],
	groupB: [
		{ path: '#', label: 'Help docs' },
		{ path: '#', label: 'Getting started' },
		{ path: '#', label: 'Blog' },
		{ path: '#', label: 'Tensell alternatives' },
		{ path: '#', label: 'Affiliates' },
	],
	groupC: [
		{ path: '#', label: 'YouTube calculator' },
		{ path: '#', label: 'Coupon code generator' },
	],
	groupD: [
		{ path: '#', label: 'About' },
		{ path: '#', label: 'Contact' },
		{ path: '#', label: 'Terms' },
		{ path: '#', label: 'Privacy policy' },
		{ path: '#', label: 'Sitemap' },
	],
};

export function Footer() {
	return (
		<footer className="w-full max-w-full text-sm text-neutral-800 bg-[#f2f6e9]">
			<div className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-12">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div>
						<h4 className="text-neutral-500 font-semibold mb-3">Product</h4>
						<ul className="space-y-2">
							{footerLinks.groupA.map((item) => (
								<li key={item.label}>
									<Link href={item.path}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-neutral-500 font-semibold mb-3">Resources</h4>
						<ul className="space-y-2">
							{footerLinks.groupB.map((item) => (
								<li key={item.label}>
									<Link href={item.path}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-neutral-500 font-semibold mb-3">Tools</h4>
						<ul className="space-y-2">
							{footerLinks.groupC.map((item) => (
								<li key={item.label}>
									<Link href={item.path}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="text-neutral-500 font-semibold mb-3">Company</h4>
						<ul className="space-y-2">
							{footerLinks.groupD.map((item) => (
								<li key={item.label}>
									<Link href={item.path}>{item.label}</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex items-center gap-2">
						<DropdownMenu>
							<DropdownMenuTrigger>
								<div className="flex items-center gap-2 border border-neutral-400 rounded-full px-4 py-2">
									<span className="flex items-center gap-2">
										<Icon name="Globe" size={15} /> English
									</span>{' '}
									<Icon name="ChevronDown" size={15} />
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>English</DropdownMenuItem>
								<DropdownMenuItem>Spanish</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						{/* <button className="flex items-center gap-2 border border-neutral-400 rounded-full px-4 py-2">
							🌐 English <span className="text-xs">▼</span>
						</button> */}
					</div>

					<div className="flex items-start gap-4 text-xl">
						<Link href="#">
							<Icon name="Facebook" size={18} />
						</Link>
						<Link href="#">
							<Icon name="Instagram" size={18} />
						</Link>
						<Link href="#">
							<Icon name="Twitter" size={18} />
						</Link>
						<Link href="#">
							<Icon name="Linkedin" size={18} />
						</Link>
					</div>
				</div>
				<div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-end">
					<p className="text-neutral-600 text-sm">© 2025 Tensell</p>
					{/* <img
								src="/mascot.svg"
								alt="Tensell mascot"
								className="w-10 mt-4 md:mt-0"
							/> */}
				</div>
			</div>
		</footer>
	);
}
