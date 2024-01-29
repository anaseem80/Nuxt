<template>
    <header class="bg-grey-200 shadow-sm">
        <nav class="container mx-auto flex between justify-between p-5">
            <nuxt-link to="/" class="text-2xl font-bold text-green-600">Nuxt Naseem</nuxt-link>
            <ul class="flex gap-5">
                <li><nuxt-link class="text-xl text-dark font-semibold hover:text-green-500 transition-all" to="/">Home</nuxt-link></li>
                <li><nuxt-link class="text-xl text-dark font-semibold hover:text-green-500 transition-all" to="/about">About</nuxt-link></li>
                <li><nuxt-link class="text-xl text-dark font-semibold transition-all btn" to="/products">Products</nuxt-link></li>
            </ul>
        </nav>
    </header>

    <div class="continer mx-auto p-4">
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-active{
        color: rgb(34 197 94);
    }
    .page-enter-active,
    .page-leave-active {
        transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        filter: blur(1rem);
    }
</style>