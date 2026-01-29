<script setup lang="ts">
import {computed} from 'vue';
import {getInventory} from '../store';

const inventory = getInventory;

const needToOrder = computed(() => inventory.value.filter(item => item.actualAmount < item.minimumAmount));
</script>

<template>
    <div>
        <ul>
            Need to order:
            <li v-for="(item, index) in needToOrder" :key="index">{{ item.name }}</li>
        </ul>
    </div>
</template>
