<template>
    <div v-if="!store.loading">Loading...</div>
    <product_details v-if="store.loading" :data="store.product"></product_details>
    <div v-if="store.error">{{ store.error }}</div>
</template>

<script setup>


    const { id } = useRoute().params
    const store = useProductStore();
    store.GET_PRODUCT_DATA(id)
    console.log(store)

</script>

<style scoped>

</style>