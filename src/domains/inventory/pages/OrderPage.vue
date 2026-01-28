<script setup lang="ts">
import {computed, ComputedRef} from 'vue';
import {getInventory} from '../store';
import {InventoryItem} from '../types/types';

const inventory: ComputedRef<InventoryItem[]> = getInventory;

const needToOrder = computed<InventoryItem[]>(() =>
    inventory.value.filter(item => item.actualAmount < item.minimumAmount),
);
</script>

<template>
    <div>
        <ul>
            Need to order:
            <li v-for="(item, index) in needToOrder" :key="index">{{ item.name }}</li>
        </ul>
    </div>
</template>
