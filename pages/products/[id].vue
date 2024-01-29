<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque earum quo dolore commodi soluta consequatur vitae quasi facilis expedita aliquid.</p>
    </div>
</template>

<script setup>
    
    const { id } = useRoute().params

    // definePageMeta({
    //     layout: 'products'
    // })

</script>

<style scoped>

</style>