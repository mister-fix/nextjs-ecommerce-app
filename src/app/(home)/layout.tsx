import { Navbar } from './components/navbar';
import { Footer } from './footer';

interface Props {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<div className="flex flex-col min-h-screen w-full overflow-x-auto">
			<Navbar />
			<div className=" max-w-full">{children}</div>
			<Footer />
		</div>
	);
}
