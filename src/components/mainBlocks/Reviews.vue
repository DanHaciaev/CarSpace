<script setup>
import { ref } from 'vue';

const popularItems = ref([
  {
    title: 'С другой стороны новая модель',
    description: 'Практический опыт показывает, что новая модель организационной деятельности позволяет выполнить',
    rating: 4,
  },
  {
    title: 'С другой стороны новая модель',
    description: 'Практический опыт показывает, что новая модель организационной деятельности позволяет выполнить',
    rating: 3,
  },
  {
    title: 'С другой стороны новая модель',
    description: 'Практический опыт показывает, что новая модель организационной деятельности позволяет выполнить',
    rating: 5,
  }
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-between w-full">
      <span class="font-bold text-lg text-gray-500 ">Отзывы</span>
      <button class="underline">Посмотреть все</button>
    </div>

    <div class="flex gap-2">
      <!-- Используем v-for для создания одинаковых карточек -->
      <div v-for="(item, index) in popularItems" :key="index" class="border-2 rounded-lg">
        <div class="p-4 flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <div class="bg-gray-500 w-8 h-7 rounded-2xl"></div>
            <h1 class="font-bold text-lg">{{ item.title }}</h1>
          </div>
          <span>{{ item.description }}</span>
          <div class="border-b-2"></div>
        </div>

        <!-- Место для отображения рейтинга с картинками звезд -->
        <div class="px-4 pb-4 flex gap-1">
          <template v-for="index in 5" :key="index">
            <img 
              :src="index <= item.rating ? '/star_full.png' : '/star.png'" 
              alt="star" 
              class="w-6 h-6"
            />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
