<script setup lang="ts">
import {useRoute} from 'vue-router';
import InventoryForm from '../components/InventoryForm.vue';
import {InventoryItem} from '../types/types';
import {getInventoryItemById, updateItemInInventory} from '../store';
import {ComputedRef} from 'vue';

const route = useRoute();
const itemId = Number(route.params.id); // convert from String.

const item: ComputedRef<InventoryItem> = getInventoryItemById(itemId);

const buttonText: string = 'Save';
</script>

<template>
    <div>
        <InventoryForm :item="item" :submitButtonText="buttonText" @submit="updateItemInInventory" />
    </div>
</template>
