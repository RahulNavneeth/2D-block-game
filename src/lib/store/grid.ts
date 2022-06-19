import { get, writable } from 'svelte/store';

export let grid = writable<('SKY' | 'DIRT' | 'CATUS')[][]>();
