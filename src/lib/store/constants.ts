import { writable } from 'svelte/store';

export let BLOCK_SIZE = writable<number>();
export let GRID_WIDTH = writable<number>();
export let GRID_HEIGHT = writable<number>();
