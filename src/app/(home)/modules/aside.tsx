import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/ui/icon';
import Image from 'next/image';
import Link from 'next/link';

export default function Aside() {
	return (
		<aside className="w-full py-26 flex flex-row items-center justify-stretch">
			<div className="flex flex-row flex-nowrap gap-[40px] justify-start items-start content-start overflow-hidden py-0 px-4 md:px-12 relative w-full container-xl max-w-7xl h-min mx-auto">
				<div className="bg-[#03301d] p-14 rounded-xl opacity-100 flex flex-col shrink-0 flex-nowrap items-center gap-y-4 justify-center overflow-hidden relative w-full text-center">
					<Image
						src="/tensell_alt.svg"
						alt="Tensell logo - aside"
						width={120}
						height={35}
						className="hidden"
					/>
					<Image
						src="/illustrations/oc-puzzle.svg"
						alt="Tensell logo - aside"
						width={220}
						height={220}
						className="hidden lg:absolute left-5 top-15 opacity-90 rotate-12 invert"
					/>
					<Badge className="px-4 py-2 mb-2 text-sm">
						14 day free trial, no card needed
					</Badge>
					<h2 className="text-4xl text-white font-semibold">
						Zero-risk selling starts here
					</h2>
					<p className="text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">
						Launch your Tensell store in minutes, no coding or design skills
						needed.
					</p>
					<div className="mt-3">
						<Link
							href="#"
							className="flex items-center justify-center gap-x-2 bg-[#86ee02] text-black font-semibold px-6 py-3 rounded-full hover:bg-white border-2 border-[#03301d] hover:text-green-900 transition duration-300"
						>
							Start your free trial <Icon name="ArrowRight" size={16} />
						</Link>
					</div>
				</div>
			</div>
		</aside>
	);
}
