import { Metadata } from 'next';
import Aside from './modules/aside';
import { AudienceShowcase } from './modules/audience-showcase';
import Features from './modules/features';
import Header from './modules/header';
import HowItWorks from './modules/how-it-works';
import Pricing from './modules/pricing';
import StorePreview from './modules/store-preview';

export const metadata: Metadata = {
	title: 'Tensell',
	description: 'The e-commerce platform for digital creators.',
};

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
		</>
	);
}
