<script setup>
import Popular from './mainBlocks/Popular.vue';
import News from './mainBlocks/News.vue';
import Reviews from './mainBlocks/Reviews.vue';
import Recomendations from './mainBlocks/Recomendations.vue';
</script>

<template>
    <div class="flex flex-col gap-10 w-4/5">
        <Popular />
        <News />
        <Reviews />
        <Recomendations />
    </div>
</template>