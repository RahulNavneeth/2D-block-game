<script lang="ts">
	import { BLOCK_SIZE } from '../store/constants';

	import { grid } from '../store/grid';

	let PLAYER_CELL: number[] = [0, 0];
	$: PLAYER_GRID_INDEX = [PLAYER_CELL[0] / $BLOCK_SIZE, PLAYER_CELL[1] / $BLOCK_SIZE];
</script>

<svelte:window
	on:keydown={(e) => {
		switch (e.key) {
			case 'ArrowLeft':
				if ($grid[PLAYER_GRID_INDEX[0]][PLAYER_GRID_INDEX[1] - 1] !== 'DIRT') {
					PLAYER_CELL[1] -= $BLOCK_SIZE;
				}
				break;
			case 'ArrowRight':
				if ($grid[PLAYER_GRID_INDEX[0]][PLAYER_GRID_INDEX[1] + 1] !== 'DIRT') {
					PLAYER_CELL[1] += $BLOCK_SIZE;
				}
				break;
			case 'ArrowUp':
				if ($grid[PLAYER_GRID_INDEX[0] - 1][PLAYER_GRID_INDEX[1]] !== 'DIRT') {
					PLAYER_CELL[0] -= $BLOCK_SIZE;
				}
				break;
			case 'ArrowDown':
				if ($grid[PLAYER_GRID_INDEX[0] + 1][PLAYER_GRID_INDEX[1]] !== 'DIRT') {
					PLAYER_CELL[0] += $BLOCK_SIZE;
				}
				break;
		}
	}}
/>
<div
	id="PLAYER-{69 * 420}"
	style="top : {PLAYER_CELL[0]}px; left : {PLAYER_CELL[1]}px; width: {$BLOCK_SIZE}px; height: {$BLOCK_SIZE}px;"
	class="absolute w-[60px] h-[{$BLOCK_SIZE}px] rounded-md bg-white z-50 border-[1px] border-black"
/>
