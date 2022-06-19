<script lang="ts">
	import { BLOCK_SIZE, GRID_HEIGHT, GRID_WIDTH } from '$lib/store/constants';
	import { grid } from '$lib/store/grid';
	import '../app.css';

	$GRID_WIDTH = Math.ceil(window.innerWidth / $BLOCK_SIZE);
	$GRID_HEIGHT = Math.floor(window.innerHeight / $BLOCK_SIZE);

	$grid = [...Array($GRID_HEIGHT)].map(() => [...Array($GRID_WIDTH)].map(() => 'DIRT'));
</script>

<div class="w-screen h-screen bg-black p-[3px] pb-0">
	<slot />
</div>

<style>
	:global(body) {
		overflow: hidden;
	}
</style>
