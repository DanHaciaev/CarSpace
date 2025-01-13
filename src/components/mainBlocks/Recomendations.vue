<script setup>
import { ref } from 'vue';

// Массив с одинаковыми данными для отображения
const popularItems = ref([
  {
    price: '3000000 MDL',
    model: 'CHERY Tiggo 8 Pro Max I',
    description: '2023 / новый',
    recommendation: 'Нормальная цена',
  },
  {
    price: '2700000 MDL',
    model: 'Jetour Dashing',
    description: '2024 / новый',
    recommendation: 'Хорошая цена',
  },
  {
    price: '5400000 MDL',
    model: 'Mercedes-Benz GLC 300 I (X253)',
    description: '2020 / 60 000 км',
    recommendation: 'Нормальная цена',
  },
  {
    price: '3000000 MDL',
    model: 'CHERY Tiggo 8 Pro Max I',
    description: '2023 / новый',
    recommendation: 'Нормальная цена',
  },
  {
    price: '2700000 MDL',
    model: 'Jetour Dashing',
    description: '2024 / новый',
    recommendation: 'Хорошая цена',
  },
  {
    price: '5400000 MDL',
    model: 'Mercedes-Benz GLC 300 I (X253)',
    description: '2020 / 60 000 км',
    recommendation: 'Нормальная цена',
  },
  {
    price: '4500000 MDL',
    model: 'Audi Q7',
    description: '2022 / 20 000 км',
    recommendation: 'Хорошая цена',
  },
  {
    price: '6000000 MDL',
    model: 'BMW 7 Series',
    description: '2021 / 10 000 км',
    recommendation: 'Отличная цена',
  },
  {
    price: '7500000 MDL',
    model: 'Lexus LX 570',
    description: '2023 / новый',
    recommendation: 'Отличная цена',
  }
]);

// Флаг для отображения дополнительных автомобилей
const showMore = ref(false);

// Функция для получения видимых автомобилей
function getVisibleItems() {
  if (showMore.value) {
    return popularItems.value; // Показываем все автомобили
  }
  return popularItems.value.slice(0, 6); // Показываем только первые 6 автомобилей
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="font-bold text-lg text-gray-500">
      Рекомендации
    </div>

    <div class="flex justify-between px-8 py-4 rounded-50% bg-recomm">
      <div class="flex flex-col">
        <span class="font-bold text-lg">Новые автомобили со скидками в наличии</span>
        <span class="text-sm">Большой выбор моделей, гарантия от официальных дилеров</span>
      </div>

      <button class="bg-button font-bold text-white px-4 rounded-2xl">Выбрать</button>
    </div>

    <!-- Контейнер для автомобилей с использованием CSS Grid -->
    <div class="grid grid-cols-3 gap-4">
      <div v-for="(item, index) in getVisibleItems()" :key="index" class="border-2 rounded-lg">
        <div class="h-56 bg-gradient-220deg rounded-t-lg"></div>
        <div class="p-4 flex flex-col gap-4">
          <div class="flex justify-between">
            <span class="uppercase font-bold text-lg">{{ item.price }}</span>
            <button class="bg-button text-white font-bold text-sm px-4 rounded-lg">{{ item.recommendation }}</button>
          </div>
          <h1 class="text-lg">{{ item.model }}</h1>
          <span class="uppercase font-bold text-xs text-gray-500">{{ item.description }}</span>
        </div>
      </div>
    </div>

    <!-- Кнопка для отображения/скрытия дополнительных автомобилей -->
    <div class="flex justify-center mt-4">
      <button @click="showMore = !showMore" class="pointer underline text-ms text-gray-500">
        {{ showMore ? 'Скрыть' : 'Посмотреть еще предложения о продаже под заказ' }}
      </button>
    </div>
  </div>
</template>
