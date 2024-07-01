import type { Minigame } from '@/types/minigame';

export const games: Minigame[] = [
	{
		name: 'Name 1',
		url: '/name1',
		minNumPlayers: 4,
		maxNumPlayers: 8,
	},
	{
		name: 'Name 2',
		url: '/name2',
		minNumPlayers: 2,
		maxNumPlayers: 6,
	},
	{
		name: 'Name 3',
		url: '/name3',
		minNumPlayers: 4,
		maxNumPlayers: 6,
	},
] as const;
