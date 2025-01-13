<template>
    <div class="w-1/5">
        <div v-for="(categorySet, index) in categorySets" :key="index" class="mb-4">
            <button @click="toggleCategories(index)"
                class="flex items-center justify-between w-full text-left text-lg font-bold">
                {{ categorySet.title }}
                <img src="/down.png" :class="{ 'rotate-180': categorySet.isOpen }"
                    class="transform transition-transform duration-700 w-4" />
            </button>

            <div ref="categoriesList" :style="{ maxHeight: categorySet.isOpen ? `${categorySet.listHeight}px` : '0px' }"
                class="mt-2 overflow-hidden transition-all duration-500 ease-in-out">
                <p v-for="(category, idx) in categorySet.categories" :key="idx" class="text-gray-700 py-1">{{ category
                    }}</p>
            </div>
        </div>

        <div class="mt-10 p-4 flex flex-col items-center gap-4 bg-gradient-40deg rounded-xl">
            <p class="border-2 w-fit py-1 px-2 rounded-2xl border-border-bt text-border-bt font-bold">ОЦЕНКА</p>
            <p class="font-bold text-lg">Узнайте, сколько стоит Ваш автомобиль</p>
            <div class="w-full flex flex-col gap-1">
                <input type="text" name="" id="" placeholder="Госномер или VIN" class="w-full py-2 px-2 rounded-xl">
                <input type="text" name="" id="" placeholder="Пробег, км" class="w-full py-2 px-2 rounded-xl">
                <input type="text" name="" id="" placeholder="Город проживания" class="w-full py-2 px-2 rounded-xl">
            </div>
            <div class="flex items-center flex-col gap-1.5 w-full">
                <button class="w-full py-2 rounded-xl bg-border-bt text-white font-bold text-sm">Оценить
                    бесплатно</button>
                <button class="w-full py-2 rounded-xl bg-white text-border-bt font-bold text-xs">Ввести параметры
                    вручную</button>
            </div>
            <p class="text-8px text-center">Оценка основана на реальных продажах авто с похожими параметрами и историей
                владения</p>
        </div>

        <div class="mt-10 p-4 flex flex-col items-center gap-4 bg-gradient-220deg rounded-xl">
            <p class="font-bold text-xl">Какой-нибудь интересный вопрос про машины?</p>
            <div class="space-y-2">
                <div class="flex items-center space-x-2">
                    <input type="radio" name="answer" id="answer1" class="h-4 w-4">
                    <label for="answer1" class="text-gray-700 text-sm">Вариант ответа вариант ответа вариант ответа</label>
                </div>
                <div class="flex items-center space-x-2">
                    <input type="radio" name="answer" id="answer2" class="h-4 w-4 ">
                    <label for="answer2" class="text-gray-700 text-sm">Вариант ответа вариант ответа вариант ответа</label>
                </div>
                <div class="flex items-center space-x-2">
                    <input type="radio" name="answer" id="answer3" class="h-4 w-4">
                    <label for="answer3" class="text-gray-700 text-sm">Вариант ответа вариант ответа вариант ответа</label>
                </div>
            </div>
            <button class="w-full py-2 rounded-xl bg-border-bt text-white font-bold text-sm">Проголосовать</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categorySets: [
                {
                    title: "Регионы",
                    categories: ["Кишинев", "Комрат", "Кагул", "Тараклия"],
                    isOpen: false,
                    listHeight: 0,
                },
                {
                    title: "Категории",
                    categories: ["Легковые", "Коммерческие", "Электро", "Китайские", "Коммерческие", "Легковые"],
                    isOpen: false,
                    listHeight: 0,
                },
                {
                    title: "Дилеры",
                    categories: ["AutoSELEKT", "InterAuto", "DAAC Hermes"],
                    isOpen: false,
                    listHeight: 0,
                },
                {
                    title: "Каталог",
                    categories: ["BMW", "Mercedes-Benz", "Volkswagen"],
                    isOpen: false,
                    listHeight: 0,
                },
            ]
        };
    },
    methods: {
        toggleCategories(index) {
            const categorySet = this.categorySets[index];
            categorySet.isOpen = !categorySet.isOpen;

            this.$nextTick(() => {
                if (categorySet.isOpen) {
                    const list = this.$refs.categoriesList[index];
                    categorySet.listHeight = list.scrollHeight;
                }
            });
        },
    },
};
</script>
