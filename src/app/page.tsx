import Image from 'next/image';

export default function Home() {
	return (
		<div className="font-primary h-screen w-screen flex items-center justify-center content-center bg-neutral-100 dark:bg-neutral-900">
			<Image
				src="/tensell.svg"
				alt="Tensell logo"
				width={175}
				height={85}
				draggable="false"
				className="animate-bounce"
			/>
		</div>
	);
}
