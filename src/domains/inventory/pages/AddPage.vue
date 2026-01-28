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

const buttonText: string = 'Add';
</script>

<template>
    <div>
        <InventoryForm :item="item" :submitButtonText="buttonText" @submit="addToInventory" />
    </div>
</template>
