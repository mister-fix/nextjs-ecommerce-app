import { ScrollArea } from '@/components/ui/scroll-area';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import Link from 'next/link';

interface NavbarItem {
	path: string;
	children: React.ReactNode;
}

interface Props {
	items: NavbarItem[];
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent side="right" className="p-0 transition-none">
				<SheetHeader className="p-4 border-b">
					<div className="flex items-center">
						<SheetTitle>
							Menu
							{/* <Link href="/">
								<Image
									src="/tensell.svg"
									alt="Tensell logo - navbar"
									width={100}
									height={35}
								/>
							</Link> */}
						</SheetTitle>
					</div>
				</SheetHeader>
				<ScrollArea className="flex flex-col overflow-y-auto h-full pb-4">
					{items.map((item) => (
						<Link
							key={item.path}
							href={item.path}
							className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
							onClick={() => onOpenChange(false)}
						>
							{item.children}
						</Link>
					))}
					<div className="border-t flex flex-col mt-4">
						<Link
							href="/login"
							className="w-full p-4 text-left text-base font-medium text-neutral-600/50 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-200"
							onClick={() => onOpenChange(false)}
						>
							Log in
						</Link>
						<Link
							href="/register"
							className="w-full p-4 font-medium bg-[#86ee02] outline-2 outline-[#03301d] hover:bg-[#03301d] hover:text-white hover transition-colors duration-300"
							onClick={() => onOpenChange(false)}
						>
							Start free trial
						</Link>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};
