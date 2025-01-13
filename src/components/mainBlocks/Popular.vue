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
    <div class="font-bold text-lg text-gray-500">
      <span>Популярное</span>
    </div>

    <div class="flex gap-2">
      <!-- Используем v-for для создания одинаковых карточек -->
      <div v-for="(item, index) in popularItems" :key="index" class="border-2 rounded-lm bg-gradient-18deg">
        <div class="p-4 flex flex-col gap-4 bg-white rounded-t-lg">
          <span class="uppercase font-bold text-xs text-gray-500">{{ item.category }}</span>
          <h1 class="font-bold text-lg">{{ item.title }}</h1>
          <span>{{ item.description }}</span>
        </div>
        <div class="h-32"></div>
      </div>
    </div>
  </div>
</template>
