<script setup lang="ts">
import {ref} from 'vue';
import type {InventoryItem} from '../types/types';
import {useRouter} from 'vue-router';

const {item, submitButtonText} = defineProps<{
    item: InventoryItem;
    submitButtonText: string;
}>();

const emit = defineEmits<{
    submit: [copyItem: InventoryItem];
}>();

const copyItem = ref<InventoryItem>({...item});

const router = useRouter();

const handleCancel = () => {
    router.push({name: 'inventory.overview'});
};

const handleSubmit = () => {
    emit('submit', copyItem.value);
    router.push({name: 'inventory.overview'});
};
</script>

<template>
    <input v-model.trim="copyItem.name" type="text" />
    <input v-model.number="copyItem.actualAmount" />
    <input v-model.number="copyItem.minimumAmount" />
    <button @click="handleSubmit">{{ submitButtonText }}</button>
    <button @click="handleCancel">Cancel</button>
</template>
