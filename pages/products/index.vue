<template>
    <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5">
        <div v-for="product in store.products">
            <product :product="product" />
        </div>
    </div>
</template>

<script setup>
    // definePageMeta({
    //     layout: 'products'
    // })

    const store = useProductsStore();

    store.GET_PRODUCTS_DATA()
</script>

<style lang="scss" scoped>

</style>