
<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
           <div class="p-7">
                <img :src="data.image" alt="thumb" class="w-full mx-auto my-7"/>
           </div>
           <div class="p-7">
                <h2 class="text-4xl my-7">{{ data.title }}</h2>
                <p class="text-xl my-7">Price - ${{ data.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
                <p>{{ data.description }}</p>
           </div>
        </div>
    </div>
</template>

<script setup>
    const { data } = defineProps(['data'])

    console.log(data)
    if(data==''){
        await navigateTo('/error')
    }
</script>

<style scoped>
    img{
        max-width: 400px
    }
</style>