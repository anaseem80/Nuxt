<template>
    <header>
        <nav>
            <nuxt-link to="/products">Nuxt Naseem</nuxt-link>
        </nav>
    </header>

    <div>
        <slot />
    </div>

    <footer>
        <ul>
            <li><nuxt-link to="/">Home</nuxt-link></li>
            <li><nuxt-link to="/about">About</nuxt-link></li>
            <li><nuxt-link to="/products">Products</nuxt-link></li>
        </ul>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>