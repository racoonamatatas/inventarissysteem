<script setup lang="ts">
import {ref} from 'vue';
import type {InventoryItem} from '../types/types';
import {useRouter} from 'vue-router';

const {item} = defineProps<{
    item: InventoryItem;
}>();

const emit = defineEmits<{
    add: [copyItem: InventoryItem];
}>();

const copyItem = ref<InventoryItem>({...item});

const router = useRouter();

const handleCancel = () => {
    router.push({name: 'inventory.overview'});
};

const handleAdd = () => {
    emit('add', copyItem.value);
    router.push({name: 'inventory.overview'});
};
</script>

<template>
    <input v-model.trim="copyItem.name" type="text" />
    <input v-model.number="copyItem.actualAmount" />
    <input v-model.number="copyItem.minimumAmount" />
    <button @click="handleAdd">Add</button>
    <button @click="handleCancel">Cancel</button>
</template>
