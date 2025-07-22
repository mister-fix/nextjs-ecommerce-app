'use client';

import { cn } from '@/lib/utils';
import { icons } from 'lucide-react';

interface IconProps {
	name: string;
	size?: string | number;
	color?: string;
	className?: string;
}

export const Icon = ({ name, size, color, className }: IconProps) => {
	const LucideIcon = icons[name as keyof typeof icons];

	return (
		<LucideIcon
			size={size}
			color={color}
			className={cn('inline-block', className)}
		/>
	);
};
