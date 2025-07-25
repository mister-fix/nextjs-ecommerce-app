import { cn } from '@/lib/utils';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const Container = ({ children, className }: Props) => {
	return (
		<div
			className={cn('w-full max-w-7xl m-auto px-4 sm:px-6 md:px-12', className)}
		>
			{children}
		</div>
	);
};
