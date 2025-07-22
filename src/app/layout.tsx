import type { Metadata } from 'next';
import { Inter, Inter_Tight } from 'next/font/google';
import './globals.css';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const interTight = Inter_Tight({
	variable: '--font-inter-tight',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Tensell - Powering sellers everywhere.',
	description:
		'Tensell is a modern multi-vendor e-commerce platform that empowers independent creators, entrepreneurs, and businesses to launch, manage, and grow their own digital storefronts.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} ${interTight.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
