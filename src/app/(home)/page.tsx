import Aside from './modules/aside';
import { AudienceShowcase } from './modules/audience-showcase';
import Features from './modules/features';
import Header from './modules/header';
import HowItWorks from './modules/how-it-works';
import Pricing from './modules/pricing';
import StorePreview from './modules/store-preview';

export default function Home() {
	return (
		<>
			<Header />

			<Features />

			<HowItWorks />

			<AudienceShowcase />

			<StorePreview />

			<Pricing />

			<Aside />

			{/* Reviews */}
			<section className="w-full max-w-full px-6 md:px-12 lg:px-20 py-24">
				<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 "></div>
			</section>
		</>
	);
}
