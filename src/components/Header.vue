<template>
    <div class="bg-gradient-to-r from-[#1D359D] via-[#2d51d3] to-[#1d359d] py-10">
        <div class=" flex justify-between items-center px-8">
            <div class="w-fit">
                <img src="/small_logo.png" alt="Logo" class="w-40">
            </div>
            <div class="flex gap-8 items-center">
                <div class="flex gap-4 h-6">
                    <img src="/question.png" alt="" class="w-6">
                    <img src="/moon.png" alt="" class="w-6">
                    <img src="/dots-menu.png" alt="" class="w-6">
                </div>

                <button class="font-bold text-white">Sign Up</button>

                <button class="border-2 border-white font-bold text-white py-3 px-7 rounded-md">Log In</button>
            </div>
        </div>

        <div class="flex items-center justify-center flex-col gap-2">
            <p class="font-bold text-white text-4xl">Продажа авто в Молдове.</p>
            <p class="font-bold text-white text-base">Car Space - это самый удобный, доступный и быстрый автомаркетплэйс
                в Молдове.</p>
        </div>

        <div class="flex justify-center pt-4 gap-4">
            <div class="bg-light-blue w-fit flex gap-4 py-2 items-center pl-3 rounded-md">
                <img src="/search.png" alt="" class="w-5 h-5 ">
                <input type="text" placeholder="Искать в Car Space..."
                    class="bg-light-blue text-white placeholder-white w-56">
            </div>

            <button class="border-2 border-white font-bold text-white py-2 px-4 rounded-md">Разместить объявление</button>
        </div>

    </div>

</template>
