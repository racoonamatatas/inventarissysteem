<script setup>
const props = defineProps(['inventory']);
</script>

<template>
    <table>
        <tbody>
            <tr>
                <th>Item</th>
                <th>Actual Amount</th>
                <th>Minimum Amount</th>
            </tr>
            <tr v-for="(item, index) in props.inventory" :key="index">
                <td>{{ item.name }}</td>
                <td>
                    <input v-model.number="item.actualAmount" min="0" />
                </td>
                <td>{{ item.minimumAmount }}</td>
            </tr>
        </tbody>
    </table>
</template>
