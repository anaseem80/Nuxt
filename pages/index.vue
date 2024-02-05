<template>
    <Head>
        <Title>Naseem | Home</Title>
    </Head>
    <div>
        {{ store.getSubCategories }}
    </div>
</template>

<script setup>
    const store = useProductsStore();

    store.GET_PRODUCTS_DATA()

</script>

<style scoped>

</style>