<template>
    <div class="card text-center p-3 rounded-md bg-white shadow-md h-full">
        <img :src="product.image" :alt="product.title" class="thumb m-0 m-auto max-h-32 ">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View Details</p>
        </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
    console.log('iam heeere')
</script>

<style scoped>

</style>