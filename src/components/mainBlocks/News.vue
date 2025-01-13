<script setup>
import { ref } from 'vue';

// Массив с одинаковыми данными для отображения
const popularItems = ref([
  {
    category: 'Организационной деятельности',
    title: 'С другой стороны новая модель',
    description: 'Практический опыт показывает, что новая модель организационной деятельности позволяет выполнить',
  },
  {
    category: 'Организационной деятельности',
    title: 'С другой стороны новая модель',
    description: 'Практический опыт показывает, что новая модель организационной деятельности позволяет выполнить',
  },
  {
    category: 'Организационной деятельности',
    title: 'С другой стороны новая модель',
    description: 'Практический опыт показывает, что новая модель организационной деятельности позволяет выполнить',
  }
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between w-full">
      <span class="font-bold text-lg text-gray-500 ">Новости</span>
      <button class="underline">Посмотреть все</button>
    </div>

    <div class="flex gap-2">
      <!-- Используем v-for для создания одинаковых карточек -->
      <div v-for="(item, index) in popularItems" :key="index" class="border-2 rounded-lm">
        <div class="p-4 flex flex-col gap-4">
          <span class="uppercase font-bold text-xs text-gray-500">{{ item.category }}</span>
          <h1 class="font-bold text-lg">{{ item.title }}</h1>
          <span>{{ item.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
