import Image from 'next/image';
import Link from 'next/link';

import placeholderImg from '@/public/placeholder-image.jpeg';
import type { Minigame } from '@/types/minigame';
import { games } from '@/lib/games-list';

const GameLink = ({ game }: { game: Minigame }) => {
	return (
		<Link
			href={game.url}
			className='hover:-translate-y-2 hover:scale-105  transition-transform duration-300'
		>
			<div className='border-2 rounded-lg overflow-hidden'>
				<Image className='w-40' src={placeholderImg} alt='placeholder' />
			</div>
		</Link>
	);
};

export default function GameLinks() {
	return (
		<section className='flex gap-4 flex-wrap absolute bottom-14'>
			{games.map((game) => (
				<GameLink game={game} key={game.name} />
			))}
		</section>
	);
}
