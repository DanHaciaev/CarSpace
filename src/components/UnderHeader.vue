<template>
    <div class="bg-under-header flex justify-between py-3 px-8 text-text-under">
      <span v-for="item in menuItems" :key="item">{{ item }}</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          "Скидки",
          "Рекомендации",
          "Отчеты",
          "Помощник",
          "Марки",
          "Выкуп",
          "Кредиты",
          "Оценки авто",
          "Страховка",
          "Для бизнеса",
          "Журналы",
        ],
      };
    },
  };
  </script>
  