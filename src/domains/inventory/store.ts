import {computed, ref} from 'vue';
import type {InventoryItem} from './types/types';

// state
const inventory = ref<InventoryItem[]>([
    {id: 0, name: 'Green Paint', actualAmount: 10, minimumAmount: 2},
    {id: 1, name: 'HDMI cable', actualAmount: 20, minimumAmount: 5},
    {id: 2, name: 'Screwes', actualAmount: 100, minimumAmount: 40},
    {id: 3, name: 'Monitor', actualAmount: 5, minimumAmount: 1},
    {id: 4, name: 'Paint brush', actualAmount: 1, minimumAmount: 5},
    {id: 5, name: 'Dust Protector', actualAmount: 10, minimumAmount: 4},
    {id: 6, name: 'Hammer', actualAmount: 20, minimumAmount: 2},
]);

// getters
export const getInventory = computed<InventoryItem[]>(() => inventory.value);

// actions
