<script setup lang="ts">
import {ref} from 'vue';
import InventoryForm from '../components/InventoryForm.vue';
import {InventoryItem} from '../types/types';
import {addToInventory} from '../store';

const item = ref<InventoryItem>({
    name: '',
    actualAmount: 0,
    minimumAmount: 0,
});

// const onAdd = (newItem: InventoryItem) => {
//     addToInventory(newItem);
// }
</script>

<template>
    <div>
        <InventoryForm :item="item" @add="addToInventory" />
    </div>
</template>
