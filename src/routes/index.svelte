<script lang="ts">
	import Player from '$lib/component/player.svelte';
	import { grid } from '$lib/store/grid';
	import { GRID_WIDTH } from '$lib/store/constants';
	import { GRID_HEIGHT } from '$lib/store/constants';
	import { BLOCK_SIZE } from '$lib/store/constants';

	const getDirt = () => {
		[...Array($GRID_WIDTH)].map((_element, DIRT_X) => {
			const Y = Math.max(
				Math.floor(Math.random() * Array($GRID_HEIGHT).length),
				Math.ceil($GRID_HEIGHT / 2 + 2)
			);
			return [...Array(Y)].map((_SubElement, DIRT_Y) => {
				$grid[DIRT_Y][DIRT_X] = 'SKY';
			});
		});
	};

	const getCatus = () => {
		const X = Math.floor(Math.random() * [...Array($GRID_WIDTH)].length);
		let Y = 0;
		for (const i in $grid) {
			if ($grid[parseInt(i)][X] === 'DIRT') {
				Y = parseInt(i) - 1;
				break;
			}
		}
		[...Array(Math.floor(Math.random() * 6))].map((_x, index) => {
			$grid[Y - index][X] = 'CATUS';
		});
	};

	getDirt();
	[...Array(Math.max(Math.floor(Math.random() * 7), 5))].map(() => getCatus());
</script>

<div class="w-screen h-screen fixed flex flex-col items-start justify-start">
	<Player />
	{#each $grid as row, indexRow}
		<div class="flex flex-row items-start justify-start">
			{#each row as cell, indexCell}
				<div
					style="width: {$BLOCK_SIZE}px; height: {$BLOCK_SIZE}px;"
					class="rounded-md border-[1px] border-black"
				>
					{#if cell === 'DIRT'}
						<div id="DIRT-{indexCell * indexRow}" class="w-full rounded-md h-full bg-amber-800" />
					{:else if cell === 'CATUS'}
						<div id="CATUS-{indexCell * indexRow}" class="w-full rounded-md h-full bg-green-800" />
					{:else if cell === 'SKY'}
						<div id="PLAYER-{indexCell * indexRow}" class="w-full rounded-md h-full bg-blue-300" />
					{/if}
				</div>
			{/each}
		</div>
	{/each}
</div>
