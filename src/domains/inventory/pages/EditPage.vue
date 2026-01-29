<script setup lang="ts">
import {useRoute} from 'vue-router';
import InventoryForm from '../components/InventoryForm.vue';
import {getInventoryItemById, updateItemInInventory} from '../store';

const route = useRoute();
const itemId = Number(route.params.id); // convert from String.

const item = getInventoryItemById(itemId);

const buttonText = 'Save';
</script>

<template>
    <div>
        <InventoryForm v-if="item" :item="item" :submitButtonText="buttonText" @submit="updateItemInInventory" />
    </div>
</template>
