import { Navbar } from './components/navbar';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<div className="flex flex-col min-h-screen w-full overflow-x-auto">
			<Navbar />
			<div className=" max-w-full">{children}</div>
			<footer className="w-full max-w-full text-sm text-neutral-800 my-12">
				<div className="w-full max-w-7xl mx-auto bg-[#f2f6e9] rounded-2xl p-4 sm:p-6 lg:p-12">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div>
							<h4 className="text-neutral-500 font-semibold mb-3">Product</h4>
							<ul className="space-y-2">
								<li>
									<a href="#">All features</a>
								</li>
								<li>
									<a href="#">Sell digital downloads</a>
								</li>
								<li>
									<a href="#">Sell print-on-demand</a>
								</li>
								<li>
									<a href="#">Sell subscriptions</a>
								</li>
								<li>
									<a href="#">Sell physical products</a>
								</li>
								<li>
									<a href="#">POD catalog</a>
								</li>
								<li>
									<a href="#">Pricing</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-neutral-500 font-semibold mb-3">Resources</h4>
							<ul className="space-y-2">
								<li>
									<a href="#">Help docs</a>
								</li>
								<li>
									<a href="#">Getting started</a>
								</li>
								<li>
									<a href="#">Blog</a>
								</li>
								<li>
									<a href="#">Tensell alternatives</a>
								</li>
								<li>
									<a href="#">Affiliates</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-neutral-500 font-semibold mb-3">Tools</h4>
							<ul className="space-y-2">
								<li>
									<a href="#">YouTube calculator</a>
								</li>
								<li>
									<a href="#">Coupon code generator</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-neutral-500 font-semibold mb-3">Company</h4>
							<ul className="space-y-2">
								<li>
									<a href="#">About</a>
								</li>
								<li>
									<a href="#">Contact</a>
								</li>
								<li>
									<a href="#">Terms</a>
								</li>
								<li>
									<a href="#">Privacy policy</a>
								</li>
								<li>
									<a href="#">Sitemap</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
						<div className="flex items-center gap-2">
							<button className="flex items-center gap-2 border border-neutral-400 rounded-full px-4 py-2">
								🌐 English <span className="text-xs">▼</span>
							</button>
						</div>

						<div className="flex items-center gap-4 text-xl">
							<a href="#">
								<i className="fab fa-facebook-f" />
							</a>
							<a href="#">
								<i className="fab fa-instagram" />
							</a>
							<a href="#">
								<i className="fab fa-x-twitter" />
							</a>
							<a href="#">
								<i className="fab fa-youtube" />
							</a>
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
		</div>
	);
}
