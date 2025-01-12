<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import UnderHeader from './components/UnderHeader.vue';
import MainBlock from './views/MainBlock.vue'
</script>

<template>
  <Header></Header>
  <UnderHeader />
  <MainBlock />
  <RouterView />
</template>