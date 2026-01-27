<script setup lang="ts">
import InventoryTable from '../components/InventoryTable.vue';
import {getInventory} from '../store';

const inventory = getInventory;
</script>

<template>
    <div>
        <InventoryTable :inventory="inventory" />
    </div>
</template>
